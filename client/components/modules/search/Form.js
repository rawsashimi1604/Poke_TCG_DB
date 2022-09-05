import React from "react";
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
    <div>
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
            <InputLabel id="set-label">Age</InputLabel>
            <Select
              labelId="set-label"
              id="Set"
              label="Set"
              value={formik.values.set}
              onChange={formik.handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
