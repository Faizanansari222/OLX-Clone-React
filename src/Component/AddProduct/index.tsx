import React, { useState } from "react";
import { addProduct } from "../../Config/firebase";
// import { addProduct, auth, onAuthStateChanged } from "../../Config/firebase";
import Footer from "../Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [province, setProvince] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // fetch("http://localhost:4007/products/addproduct", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     title,
  //     price,
  //     province,
  //     date,
  //     description,
  //     image,
  //   }),
  // });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, price, province, date, description, image);

    if (!title || !price || !province || !date || !description || !image) {
      Swal.fire("Validation Error", "All fields are required.", "warning");
      return;
    }
    try {
      await addProduct({ title, price, date, description });
      Swal.fire({
        icon: "success",
        title: "Your Product is Upload Seccessfully",
        showConfirmButton: false,
        // button:
      });
      navigate("/");
      console.log("Form submitted");
      setTitle("");
      setPrice("");
      setProvince("");
      setDate("");
      setDescription("");
      setImage(null);
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  return (
    <div className="">
      <section className="mb-14 max-w-lg p-6 mx-auto bg-[#002f34] rounded-md shadow-md dark:bg-gray-800 mt-20">
        <div className="flex justify-center">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            POST YOUR AD
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">Title:</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#0f2325] dark:focus:border-[#0f2325] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Price:</label>
              <div className="flex items-center px-4 bg-white border rounded-md">
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="block w-full mt-2 py-1 text-gray-700 bg-white focus:outline-none border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500"
                />
                <span className="font-semibold text-gray-500 text-xl">
                  /Rs.
                </span>
              </div>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Select Province:
              </label>
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select Province</option>
                <option value="Sindh">Sindh</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Punjab">Punjab</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Date:</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-[#0f2325] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Description:
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image:
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input
                        onChange={(e: any) => setImage(e.target.files[0])}
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default AddProduct;
