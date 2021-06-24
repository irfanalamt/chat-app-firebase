import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Paper,
  CssBaseline,
  Typography,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { NoEncryption } from "@material-ui/icons";

class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: "error found",
    };
  }

  render() {
    return (
      <main>
        <Container maxWidth="xs">
          <CssBaseline></CssBaseline>
          <Box m={6}></Box>
          <Paper
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5">
              Signup
            </Typography>
            <form
              onSubmit={(e) => this.submitSignup(e)}
              style={{ width: "85%" }}
            >
              <FormControl required margin="normal" fullWidth>
                <InputLabel htmlFor="signup-email-input">
                  Enter Your Email
                </InputLabel>
                <Input
                  autoComplete="email"
                  onChange={(e) => this.userTyping("email", e)}
                  id="signup-email-input"
                  autoFocus
                ></Input>
              </FormControl>
              <FormControl required margin="normal" fullWidth>
                <InputLabel htmlFor="signup-password-input">
                  Create a Password
                </InputLabel>
                <Input
                  type="password"
                  id="signup-password-input"
                  onChange={(e) => this.userTyping("password", e)}
                ></Input>
              </FormControl>
              <FormControl required margin="normal" fullWidth>
                <InputLabel htmlFor="signup-password-confirmation">
                  Confirm your Password
                </InputLabel>
                <Input
                  type="password"
                  id="signup-password-confirmation"
                  onChange={(e) => this.userTyping("passwordConfirmation", e)}
                ></Input>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
              <Box m={2}></Box>
            </form>
            {this.state.signupError ? (
              <Typography component="h5" variant="h6" color="error">
                {this.state.signupError}
              </Typography>
            ) : null}
            <Typography component="h6" variant="subtitle2" color="primary">
              Already have an account?
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/login">
              Log In
            </Link>
          </Paper>
        </Container>
      </main>
    );
  }

  userTyping = (type, e) => {
    console.log(type, e);
  };

  submitSignup = (e) => {
    console.log("Submitting signup");
  };
}

export default SignupComponent;
