import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import UseAuth from "../../../../Hooks/UseAuth";
import axios from "axios";
const AddBooks = () => {
    const {user }= UseAuth()
    const email = user?.email
    console.log(email)
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
    onSubmit: async (values) => {
      const {title,author,image,price,stock,category,description} = values
      const bookInfo =  {title,author,image,price,stock,category,description,email}
      console.log(bookInfo)
      const res = await axios.post("http://localhost:5000/books", bookInfo)
      console.log(res.data);
    },
  });
  return (
    <div className=" w-full my-8">
      <h2 className="text-center text-2xl lg:text-4xl">Add Books</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="rounded-lg mt-12 flex flex-col p-8 gap-2 items-center bg-black space-y-2 mx-auto w-full text-white"
      >
        <div className="lg:grid grid-cols-3 w-full gap-2">
          <div className=" w-3/4 lg:w-full space-y-2">
            <label className="" htmlFor="title">
              Book's name
            </label>
            <br />
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className="w-full mx-auto rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" Enter book name"
            />
            <br />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-red-400 text-md">{formik.errors.title}</p>
            ) : null}
          </div>

          <div className="w-3/4 lg:w-full mx-auto space-y-2">
            <label htmlFor="author"> Author name </label>
            <br />

            <input
              id="author"
              name="author"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author}
              className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Enter author name"
            />
            {formik.touched.author && formik.errors.author ? (
              <p className="text-red-400 text-md">{formik.errors.author}</p>
            ) : null}
          </div>

          <div className="w-3/4 lg:w-full mx-auto space-y-2">
            <label>Image</label>
            <br />

            <input
              id="image"
              name="image"
              type="url"
              className="w-full mx-auto rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              onChange={formik.handleChange}
              value={formik.values.image}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <p className="text-red-400 text-md">{formik.errors.image}</p>
            ) : null}
          </div>
        </div>

        <div className="lg:grid w-full grid-cols-2 gap-2">

          <div className="space-y-2 w-3/4 lg:w-full">
            <label htmlFor="price">price</label>
            <br />
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="price"
            />
            {formik.touched.price && formik.errors.price ? (
              <p className="text-red-400 text-md">{formik.errors.price}</p>
            ) : null}
          </div>

          <div className="space-y-2 w-3/4 lg:w-full">
            <label>Stock</label>
            <br />
            <input
              id="stock"
              name="stock"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock}
              className="w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-pink-base-300  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="stock"
            />
            {formik.touched.stock && formik.errors.stock ? (
              <p className="text-red-400 text-md">{formik.errors.stock}</p>
            ) : null}
          </div>

        </div>

        <div className="space-y-2 mx-auto w-3/4 lg:w-full">
          <label>Category</label>
          <br />
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
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="self-help">Self-Help</option>
            <option value="children">Children's Books</option>
            <option value="young-adult">Young Adult</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <p className="text-red-400 text-md">{formik.errors.category}</p>
          ) : null}
        </div>

        <div className="space-y-2 mx-auto w-3/4 lg:w-full">
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Type here"
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
            className="w-3/4 btn py-3 rounded-lg  px-3 bg-primary text-white"
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
