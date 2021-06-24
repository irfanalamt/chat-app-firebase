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
import firebase from "firebase/app";
require("firebase/firestore");

class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: "",
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

  formValid = () => this.state.password === this.state.passwordConfirmation;

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;

      default:
        break;
    }
  };

  submitSignup = (e) => {
    e.preventDefault();
    if (!this.formValid()) {
      this.setState({ signupError: "Passwords Dont match!" });
    } else this.setState({ signupError: "" });
    console.log("Submitting signup");

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        const userObj = { email: userCredential.user.email };
        firebase
          .firestore()
          .collection("users")
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push("/dashboard");
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            this.setState({ signupError: error });
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error code=${errorCode} Error message=${errorMessage}`);
        this.setState({ signupError: errorMessage });
      });
  };
}

export default SignupComponent;
