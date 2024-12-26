import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import PageTitle from "../../Components/PageTitle";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const { login, googleSignin } = UseAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Form validation via yup
    validationSchema: Yup.object({
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
      const minDelay = 1000;
      const startTime = Date.now();
      toast.loading("Logging in...");

      const { email, password } = values;
      try {
        await login(email, password);
        const passed = Date.now() - startTime;
        if (passed < minDelay) {
          await new Promise((resolve) =>
            setTimeout(resolve, minDelay - passed)
          );
        }

        toast.dismiss();
        toast.success("User successfully logged in!!");
        navigate(location?.state ? location?.state : "/");
      } catch (error) {
        toast.dismiss();
        toast.error(`${error.message}`);
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

      await axiosPublic.post("/users", userInfo);

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
    <div className=" mx-auto mt-4 mb-8 lg:mx-12">
      <PageTitle title={"Login"}></PageTitle>
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg flex flex-col gap-2 items-center bg-secondary py-6 space-y-2 mx-auto lg:w-2/3 text-white"
      >
        <h2 className="text-center text-2xl lg:text-2xl text-accent_1 font-semibold mb-6">
          Please Login!
        </h2>
    

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

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            className="w-full btn py-3 rounded-lg  px-3 border-none bg-accent_1 text-white"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="divider divider-accent w-full lg:lg:w-2/3 mx-auto">Or</div>

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="btn mb-4 flex gap-2 items-center text-white rounded-lg text-center w-full bg-accent_1 border-none py-3"
          >
            <FcGoogle className="text-2xl"></FcGoogle>
            <h2 className="flex justify-center items-center gap-4">
              Login by Google
            </h2>
          </button>
        </div>

        <div className="w-3/4 flex items-center justify-center lg:w-2/4">
          <h2>
            New to the site ?
            <Link
              className="text-blue-400 ml-2 hover:underline"
              to="/registration"
            >
              Register
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Login;
