import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import loginBg from "../../assets/vecteezy_man-entering-security-password_4689193-1.jpg";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      image: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
          "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),

    onSubmit: async (values) => {
        console.log(values)
      const email = values.email;
      const name = values.fullName;
      const password = values.password;
      const image = values.Profile;
      console.log(name, image);
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const photo_url = res.data.data.display_url;
      console.log("photo url is", photo_url)
      const createdUser = await createUser(email, password);
      console.log(createdUser);
      updateUser(name, photo_url)
        .then(async () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 1500,
          });

          const isAdmin = false;
          const userInfo = {
            name,
            email,
            photo_url,
            isAdmin,
          };
          await axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
          });
          navigate(location?.state ? location?.state : "/");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const handleGoogleSigin = () => {};

  return (
    <div
      className=" w-full my-8 mx-12">
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg mt-12 flex flex-col gap-2 items-center bg-primary py-6 space-y-2 mx-auto lg:w-2/3 text-white"
      >
        <h2 className="text-center text-2xl lg:text-4xl text-[#d9f9a5] my-6">
          Please Sign Up{" "}
        </h2>
        <div className=" w-3/4 lg:w-2/4 space-y-2">
          <label className="" htmlFor="fullName">Full Name</label>
          <br />
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full mx-auto rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
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
            className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
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
            className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-400 text-md">{formik.errors.password}</p>
          ) : null}
        </div>

        <br />
        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            className="w-3/4 btn py-3 rounded-lg  px-3 bg-[#4CAF41] text-white"
            type="submit"
          >
            Sign up
          </button>
        </div>
       
        <div className="divider divider-accent lg:w-2/3 mx-auto">Or</div>
          
    
        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            onClick={handleGoogleSigin}
            className="btn mb-4 text-white rounded-lg text-center w-3/4 bg-[#4CAF41] py-3"
          >
            <h2 className="flex justify-center items-center gap-4">
              Login by Google
            </h2>
          </button>
        </div>

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <h2>
            Already have an account ?
            <Link className="text-blue-400 ml-2 hover:underline" to="/signin">
             Login
            </Link>
          </h2>
        </div>

      </form>
    </div>
  );
};

export default Registration;
