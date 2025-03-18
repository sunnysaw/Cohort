import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AuthApi from "../services/AuthApi.js";
function SignUp()
{
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter your name"),
      email: Yup.string().required("Enter your email"),
      password: Yup.string()
        .min(8, "Minimum eight characters required")
        .required("Enter your password"),
    }),
    onSubmit: async (value) => {
      try {
        const response = await AuthApi("signup" , value);
        console.log("Server Response:", response);
        navigate("/Login");
        formik.resetForm();
      } catch (error) {
        setError(error.message)
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center items-center border-2 p-6 m-6 rounded-2xl w-96 mx-auto shadow-lg bg-white "
    >
      {error}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Signup Page</h1>

      <input
        type="text"
        placeholder="Enter your Name"
        className="border-2 p-2 m-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name ? (
        <p className="text-red-500 text-sm">{formik.errors.name}</p>
      ) : null}

      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        className="border-2 p-2 m-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="text-red-500 text-sm">{formik.errors.email}</p>
      ) : null}

      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        className="border-2 p-2 m-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password ? (
        <p className="text-red-500 text-sm">{formik.errors.password}</p>
      ) : null}

      <div className="mt-4 flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition duration-300 cursor-pointer"
        >
          SignUp!
        </button>
        <button
          onClick={() => navigate("/Login")}
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded-2xl hover:bg-gray-600 transition duration-300 cursor-pointer"
        >
          Login!
        </button>
      </div>
    </form>
  );
}

export default SignUp;
