import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Select,
  InputLabel,
  TextField,
  MenuItem,
  FormControl,
} from "@mui/material";

import { SearchContextData } from "@/contexts/SearchContext";

const validationSchema = yup.object({
  card_name: yup
    .string("Enter your search keywords here.")
    .min(2, "Minimum of 2 characters required.")
    .max(50, "Maximum of 50 characters.")
    .required("Card name is required."),
  set_id: yup.string("Choose your set."),
  type_id: yup.string("Choose your type."),
  supertype_id: yup.string("Choose your supertype."),
  rarity_id: yup.string("Choose your rarity."),
});

function buildSearchURL(queryObj) {
  let queryString = "http://localhost:5000/search/cards?";

  const keys = Object.keys(queryObj);
  for (let i = 0; i < keys.length; i++) {
    // Join query string
    queryString += `${keys[i]}=${queryObj[keys[i]]}`;

    // If it is not the last element add & to join query string
    if (i != keys.length - 1) {
      queryString += "&";
    }
  }

  return queryString;
}

function Form() {
  const router = useRouter();
  const { sets, types, supertypes, rarities } = useContext(SearchContextData);

  const formik = useFormik({
    initialValues: {
      card_name: "Charizard",
      set_id: "",
      type_id: "",
      supertype_id: "",
      rarity_id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const searchRedirectURL = buildSearchURL(values);
      router.push(searchRedirectURL);
    },
  });

  return (
    <div className="pt-3">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        {/* Keywords */}
        <TextField
          fullWidth
          id="card_name"
          name="card name"
          label="Search by keywords"
          value={formik.values.card_name}
          onChange={formik.handleChange}
          error={formik.touched.card_name && Boolean(formik.errors.card_name)}
          helperText={formik.touched.card_name && formik.errors.card_name}
        />

        <div className="grid grid-cols-4 gap-3">
          {/* Set */}
          <FormControl fullWidth>
            <InputLabel id="set-label">Set</InputLabel>
            <Select
              labelId="set-label"
              id="set_id"
              label="set_id"
              value={formik.values.set_id}
              onChange={(nextVal) =>
                formik.setFieldValue("set_id", nextVal.target.value)
              }
            >
              {sets &&
                sets.map((set, i) => {
                  return (
                    <MenuItem key={set.set_id} value={set.set_id}>
                      {set.set_name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          {/* Type */}
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type_id"
              label="type_id"
              value={formik.values.type_id}
              onChange={(nextVal) =>
                formik.setFieldValue("type_id", nextVal.target.value)
              }
            >
              {types &&
                types.map((type, i) => {
                  return (
                    <MenuItem key={type.type_id} value={type.type_id}>
                      {type.type}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          {/* Supertype */}
          <FormControl fullWidth>
            <InputLabel id="supertype-label">Supertype</InputLabel>
            <Select
              labelId="supertype-label"
              id="supertype_id"
              label="supertype_id"
              value={formik.values.supertype_id}
              onChange={(nextVal) =>
                formik.setFieldValue("supertype_id", nextVal.target.value)
              }
            >
              {supertypes &&
                supertypes.map((supertype, i) => {
                  return (
                    <MenuItem
                      key={supertype.supertype_id}
                      value={supertype.supertype_id}
                    >
                      {supertype.supertype}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          {/* Rarity */}
          <FormControl fullWidth>
            <InputLabel id="rarity-label">Rarity</InputLabel>
            <Select
              labelId="rarity-label"
              id="rarity_id"
              label="rarity_id"
              value={formik.values.rarity_id}
              onChange={(nextVal) =>
                formik.setFieldValue("rarity_id", nextVal.target.value)
              }
            >
              {rarities &&
                rarities.map((rarity, i) => {
                  return (
                    <MenuItem key={rarity.rarity_id} value={rarity.rarity_id}>
                      {rarity.rarity}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
        {/* Sets */}

        <button
          type="submit"
          className="w-full text-white bg-[#3f51b5] py-2 rounded-[20px] transition-all duration-200 shadow-lg hover:opacity-90 "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
