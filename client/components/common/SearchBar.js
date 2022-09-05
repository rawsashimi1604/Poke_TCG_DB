import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import buildSearchURL from "@/lib/buildSearch";

import { TbSearch } from "react-icons/tb";

const validationSchema = yup.object({
  card_name: yup
    .string("Enter your search keywords here.")
    .min(2, "Minimum of 2 characters required.")
    .max(50, "Maximum of 50 characters.")
    .required("Card name is required."),
});

function SearchBar() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      card_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const searchRedirectURL = buildSearchURL(values);
      router.push(searchRedirectURL);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mb-6 self-end">
      <div className="flex items-center">
        <div className="flex border border-purple-200 rounded">
          <input
            type="text"
            className="block w-full px-4 py-2 text-gray-700  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-20"
            style={{ backgroundColor: "white !important" }}
            id="card_name"
            name="card_name"
            label="Search"
            value={formik.values.card_name}
            onChange={formik.handleChange}
            error={formik.touched.card_name && Boolean(formik.errors.card_name)}
            helperText={formik.touched.card_name && formik.errors.card_name}
            placeholder="Search for cards!"
          />
          <button
            className="px-3 text-white bg-gray-600 border-l hover:bg-gray-700 transition-all duration-200 rounded"
            type="submit"
          >
            <TbSearch />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
