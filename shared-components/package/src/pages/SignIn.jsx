import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const SignIn = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;
