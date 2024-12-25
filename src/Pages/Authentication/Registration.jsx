import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../../assets/vecteezy_man-entering-security-password_4689193-1.jpg";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

// image hosting key and api
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Registration = () => {
  const { createUser, googleSignin} = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

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
      email: Yup.string().email("Invalid email address").required("Email is Required"),
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
      const minDelay = 1000;
      const startTime = Date.now();
      toast.loading("User creating...")

      const{name,email,role,password} = values;
      const image = values?.Profile;
      const cart = [];
      const wishlist = [];
      const status = values?.role =='seller' ? "pending" : "approved";

      // image hosting and url creation
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const photoURL = res?.data?.data?.display_url;

      // User creation with email and password
      try {
        const createdUser = await createUser(email, password);
       console.log(createdUser)
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
        await axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res?.data);
        });
        const passed = Date.now() - startTime;
        if (passed < minDelay) {
          await new Promise((resolve) => setTimeout(resolve, minDelay - passed));
        }
       
        toast.dismiss();
        toast.success("User successfully created!!");
        navigate(location?.state ? location?.state : "/");
        
      } catch (err) {
        toast.dismiss()
        toast.error(`${err.message}`)
      }
    },
  });


  const handleGoogleSignin = async () => {
    const res = await googleSignin();
    try {
      const name = res?.user?.displayName;
      const email = res?.user.email;
      const photoURL =res?.user?.photoURL;
      const role = "buyer"
      const status = "approved"
      const isAdmin = false;
      const cart=[];
      const wishlist=[];

      const userInfo= {name,email,photoURL,role,status,isAdmin,cart,wishlist} 
      const minDelay = 1000;
      const startTime = Date.now();
      toast.loading("User is creating...");

      await axiosPublic.post("/users", userInfo)

      const passed = Date.now() - startTime;
      if (passed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - passed));
      }
     
      toast.dismiss();
      toast.success("User successfully created!!");
      
      
    } catch (error) {
      toast.dismiss()
      toast.error(`${error.message}`)
    }
  };

  return (
    <div className=" w-full my-8 mx-12">

      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg mt-12 flex flex-col gap-2 items-center bg-black py-6 space-y-2 mx-auto lg:w-2/3 text-white"
      >
        <h2 className="text-center text-2xl lg:text-4xl text-[#d9f9a5] my-6">
          Please Sign Up{" "}
        </h2>
        <div className=" w-3/4 lg:w-2/4 space-y-2">
          <label className="" htmlFor="fullName">
            Full Name
          </label>
          <br />
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full mx-auto rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" Your full Name"
          />
          <br />
          {formik.touched.fullName && formik.errors.fullName ? (
            <p className="text-red-400 text-md">{formik.errors.fullName}</p>
          ) : null}
        </div>
        <div className="w-3/4 lg:w-2/4 mx-auto space-y-2">
          <label htmlFor="email"> Email Address </label>
          <br />

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="Email Address"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-400 text-md">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="w-3/4 lg:w-2/4 mx-auto space-y-2">
          <label>Image</label>
          <br />

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
        </div>
        <br />
        <div className="space-y-2 mx-auto w-3/4 lg:w-2/4">
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-400 text-md">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="space-y-2 mx-auto w-3/4 lg:w-2/4">
          <label>Role</label>
          <br />
          <select
            className="select text-black select-bordered w-full"
            id="role"
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          >
            <option disabled selected>
              Select Role
            </option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        <br />
        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            className="w-3/4 btn py-3 rounded-lg  px-3 bg-primary text-white"
            type="submit"
          >
            Sign up
          </button>
        </div>

        <div className="divider divider-accent lg:w-2/3 mx-auto">Or</div>

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn gap-2 flex items-center mb-4 text-white rounded-lg text-center w-3/4 bg-primary py-3"
          >
            <FcGoogle className="text-2xl"/>
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
