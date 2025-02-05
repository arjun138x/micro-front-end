import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ label, type = "text", value, onChange, ...props }) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      variant="outlined"
      margin="normal"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default TextInput;
