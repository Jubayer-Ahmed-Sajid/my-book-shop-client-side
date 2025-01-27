import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import PageTitle from "../../Components/PageTitle";
import { MdOutlineMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

// image hosting key and api
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Registration = () => {
  const { createUser, googleSignin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      image: "",
      role: "buyer",
    },

    // Form validation via yup
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(25, "Must be 15 characters or less")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
          "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),

    // Form Submission
    onSubmit: async (values) => {
      console.log(values);
      const minDelay = 1000;
      const startTime = Date.now();
      toast.loading("User creating...");

      const { email, role, password } = values;
      const name = values?.fullName;
      const image = values?.Profile;
      const cart = [];
      const wishlist = [];
      const status = values?.role == "seller" ? "pending" : "approved";

      // image hosting and url creation
      const imageSizeLimit = 1024 * 1024; // 
      if (image.size > imageSizeLimit) {
        toast.error("Image size exceeds the limit of 1MB");
        toast.dismiss();
        return;
      }
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const photoURL = res?.data?.data?.display_url;

      // User creation with email and password
      try {
        const createdUser = await createUser(email, password);
        // console.log(createdUser);
        const isAdmin = false;
        const userInfo = {
          name,
          email,
          photoURL,
          role,
          status,
          isAdmin,
          cart,
          wishlist,
        };
        await axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            // console.log(res?.data);
          });
        const passed = Date.now() - startTime;
        if (passed < minDelay) {
          await new Promise((resolve) =>
            setTimeout(resolve, minDelay - passed)
          );
        }

        toast.dismiss();
        toast.success("User successfully created!!");
        navigate(location?.state ? location?.state : "/");
      } catch (err) {
        toast.dismiss();
        toast.error(`${err.message}`);
      }
    },
  });

  const handleGoogleSignin = async () => {
    const res = await googleSignin();
    try {
      const name = res?.user?.displayName;
      const email = res?.user.email;
      const photoURL = res?.user?.photoURL;
      const role = "buyer";
      const status = "approved";
      const isAdmin = false;
      const cart = [];
      const wishlist = [];

      const userInfo = {
        name,
        email,
        photoURL,
        role,
        status,
        isAdmin,
        cart,
        wishlist,
      };
      const minDelay = 1000;
      const startTime = Date.now();
      toast.loading("User is creating...");

      await axiosPublic.post(
        "/users",
        userInfo
      );

      const passed = Date.now() - startTime;
      if (passed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - passed));
      }

      toast.dismiss();
      toast.success("User successfully created!!");
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      toast.dismiss();
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className="mx-auto mt-4 mb-8 lg:mx-12">
      <PageTitle title={"Registration"}></PageTitle>

      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg flex flex-col gap-2 items-center bg-secondary py-6 space-y-2 mx-auto lg:w-2/3 text-white"
      >
        <h2 className="text-center text-2xl font-semibold lg:text-2xl text-accent mb-6">
          Please Register!
        </h2>
        <div className=" w-3/4 lg:w-2/4 space-y-2">
          Name
          <br />
          <label
            className="input input-bordered flex items-center gap-2"
            htmlFor="fullName"
          >
            <CgProfile className="text-secondary" />

            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="grow text-secondary"
              placeholder=" Your full Name"
            />
          </label>
          {formik.touched.fullName && formik.errors.fullName ? (
            <p className="text-red-400 text-md">{formik.errors.fullName}</p>
          ) : null}
        </div>
        <div className="w-3/4 lg:w-2/4 mx-auto space-y-2">
          Email
          <br />
          <label
            htmlFor="email"
            className="input input-bordered flex items-center gap-2"
          >
            <MdOutlineMail className="text-secondary"></MdOutlineMail>

            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="grow text-secondary"
              placeholder="Email Address"
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-400 text-md">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="w-3/4 lg:w-2/4 mx-auto space-y-2">
          <label className="">
            Profile Photo
            <br />
          </label>

          <input
            id="image"
            name="image"
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              formik.setFieldValue("Profile", file);
            }}
            onBlur={formik.handleBlur}
          />
          <p className="text-sm">image size must be less than 400 KB</p>
        </div>

        <div className="space-y-2 mx-auto w-3/4 lg:w-2/4">
          Password <br />
          <label
            className="input input-bordered flex items-center gap-2"
            htmlFor="password"
          >
            <IoKeyOutline className="text-secondary" />
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="grow text-secondary"
              placeholder="password"
            />
          </label>
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-400 text-md">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="space-y-2 mx-auto w-3/4 lg:w-2/4">
          <label>Role</label>
          <br />
          <select
            className="select text-secondary select-bordered w-full"
            id="role"
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          >
            <option disabled>Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        <br />
        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            className="w-full hover:bg-accent/80 btn py-3 rounded-lg  px-3 bg-accent border-none text-white"
            type="submit"
          >
            Sign up
          </button>
        </div>

        <div className="divider divider-accent lg:w-2/3 w-full mx-auto">Or</div>

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn hover:bg-accent/80 gap-2 flex items-center mb-4 text-white rounded-lg text-center w-full bg-accent border-none py-3"
          >
            <FcGoogle className="text-2xl" />
            <h2 className="flex justify-center items-center gap-4">
              Login by Google
            </h2>
          </button>
        </div>

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <h2>
            Already have an account ?
            <Link className="text-blue-400 ml-2 hover:underline" to="/login">
              Login
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Registration;
