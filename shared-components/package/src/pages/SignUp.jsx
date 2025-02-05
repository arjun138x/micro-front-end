import React, { useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import TextInput from "../components/TextInput";
import FormButton from "../components/FormButton";

const SignUp = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <FormButton text="Sign Up" />
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
