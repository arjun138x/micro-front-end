import React from "react";
import { Button } from "@mui/material";

const FormButton = ({ text, onClick, type = "submit", ...props }) => {
  return (
    <Button
      type={type}
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 2 }}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};

export default FormButton;
