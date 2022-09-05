import React, { useContext } from "react";
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
  search: yup
    .string("Enter your search keywords here.")
    .min(2, "Minimum of 2 characters required.")
    .max(50, "Maximum of 50 characters.")
    .required("Field is required."),
  set: yup.string("Choose your set."),
  type: yup.string("Choose your type."),
  supertype: yup.string("Choose your supertype."),
  rarity: yup.string("Choose your rarity."),
});

function Form() {
  const { sets, types, supertypes, rarities } = useContext(SearchContextData);

  const formik = useFormik({
    initialValues: {
      search: "",
      set: "",
      type: "",
      supertype: "",
      rarity: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="pt-3">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        {/* Keywords */}
        <TextField
          fullWidth
          id="Search"
          name="search"
          label="Search by keywords"
          value={formik.values.search}
          onChange={formik.handleChange}
          error={formik.touched.search && Boolean(formik.errors.search)}
          helperText={formik.touched.search && formik.errors.search}
        />

        <div className="grid grid-cols-4 gap-3">
          {/* Set */}
          <FormControl fullWidth>
            <InputLabel id="set-label">Set</InputLabel>
            <Select
              labelId="set-label"
              id="Set"
              label="Set"
              value={formik.values.set}
              onChange={formik.handleChange}
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
              id="Type"
              label="Type"
              value={formik.values.type}
              onChange={formik.handleChange}
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
              id="Supertype"
              label="Supertype"
              value={formik.values.supertype}
              onChange={formik.handleChange}
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
              id="Rarity"
              label="Rarity"
              value={formik.values.rarity}
              onChange={formik.handleChange}
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

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
