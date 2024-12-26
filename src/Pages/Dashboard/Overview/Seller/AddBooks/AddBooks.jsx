import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import UseAuth from "../../../../../Hooks/UseAuth";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import PageTitle from "../../../../../Components/PageTitle";
import { toast } from "sonner";
import useUserDetails from "../../../../../Hooks/useUserDetails";
import Loading from "../../../../../Components/Loading";
const AddBooks = () => {
  const { user } = UseAuth();
  const {data,isLoading} = useUserDetails();

  if(isLoading){
    return <Loading></Loading>
  }
  const status = data?.data?.status;
  // console.log(status);
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  // console.log(email);
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      image: "",
      price: "",
      stock: "",
      category: "",
      description: "",
    },

    // Form validation via yup
    validationSchema: Yup.object({
      title: Yup.string().required("Name is Required"),
      author: Yup.string().required("Author name is Required"),
      image: Yup.string().url("Invalid url").required("Image url is required"),
      price: Yup.number().required("Price is required"),
      stock: Yup.number().required("Stock is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values,{ resetForm }) => {

      try{
        const { title, author, image, price, stock, category, description } =
        values;
      const bookInfo = {
        title,
        author,
        image,
        price,
        stock,
        category,
        description,
        email,
      };
     if(status != 'approved'){
      toast.error("You need to be approved as seller");
     }
     else{

       await axiosSecure.post("/books", bookInfo)
       toast.success("Book successfully added!")
       resetForm()
     }
      }
      catch (error) {
        toast.error(`${error?.message || error}`);
      }
     
    },
  });
  return (
    <div className=" w-full mt-4 mb-8">
      <PageTitle title={"Add Book"}></PageTitle>
      <h2 className="text-center text-2xl lg:text-4xl">Update Book</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg mt-12 flex flex-col p-8 gap-2 items-center bg-secondary space-y-2 mx-auto w-full text-white"
      >
        <div className="lg:grid grid-cols-3 space-y-4 lg:space-y-0 w-full gap-2">
          <div className=" w-3/4 lg:w-full mx-auto space-y-2">
            <label className="" htmlFor="title">
              Book's name
            </label>

            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className="w-full mx-auto rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" Enter book name"
            />
            <br />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-red-400 text-md">{formik.errors.title}</p>
            ) : null}
          </div>

          <div className="w-3/4 lg:w-full mx-auto space-y-2">
            <label htmlFor="author"> Author name </label>

            <input
              id="author"
              name="author"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author}
              className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Enter author name"
            />
            {formik.touched.author && formik.errors.author ? (
              <p className="text-red-400 text-md">{formik.errors.author}</p>
            ) : null}
          </div>

          <div className="w-3/4 lg:w-full mx-auto space-y-2">
            <label>Image</label>

            <input
              id="image"
              name="image"
              type="url"
              className="w-full mx-auto rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              onChange={formik.handleChange}
              value={formik.values.image}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <p className="text-red-400 text-md">{formik.errors.image}</p>
            ) : null}
          </div>
        </div>

        <div className="lg:grid w-full grid-cols-2 space-y-4 lg:space-y-0 gap-2">
          <div className="space-y-2 mx-auto w-3/4 lg:w-full">
            <label htmlFor="price">price</label>

            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Price"
            />
            {formik.touched.price && formik.errors.price ? (
              <p className="text-red-400 text-md">{formik.errors.price}</p>
            ) : null}
          </div>

          <div className="space-y-2 mx-auto w-3/4 lg:w-full">
            <label>Stock</label>

            <input
              id="stock"
              name="stock"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock}
              className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-secondary outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Stock"
            />
            {formik.touched.stock && formik.errors.stock ? (
              <p className="text-red-400 text-md">{formik.errors.stock}</p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2 mx-auto w-3/4 lg:w-full">
          <label>Category</label>

          <select
            className="select text-black select-bordered w-full"
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option disabled selected>
              Select Category
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science-Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Children">Children's Books</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <p className="text-red-400 text-md">{formik.errors.category}</p>
          ) : null}
        </div>

        <div className="space-y-2 mx-auto w-3/4 lg:w-full">
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Enter Description"
            className="input input-bordered input-lg text-black w-full max-w-screen h-40"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <p className="text-red-400 text-md">{formik.errors.description}</p>
          ) : null}
        </div>

        <br />
        <div className="w-3/4 flex items-center justify-center lg:w-full">
          <button
            className="w-full lg:w-3/5 btn py-3 rounded-lg  px-3 bg-accent_1 border-none text-white"
            type="submit"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
