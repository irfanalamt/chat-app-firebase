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

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loginError: "",
    };
  }

  render() {
    return (
      <main>
        <Container maxWidth="xs">
          <CssBaseline></CssBaseline>

          <Box m={10}></Box>
          <Paper
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="body1">
              Login
            </Typography>
            <form
              onSubmit={(e) => this.submitLogin(e)}
              style={{ width: "85%" }}
            >
              <FormControl required margin="normal" fullWidth>
                <InputLabel htmlFor="login-email-input">
                  Enter Your Email
                </InputLabel>
                <Input
                  autoComplete="email"
                  onChange={(e) => this.userTyping("email", e)}
                  id="login-email-input"
                  autoFocus
                ></Input>
              </FormControl>
              <FormControl required margin="normal" fullWidth>
                <InputLabel htmlFor="login-password-input">
                  Enter Password
                </InputLabel>
                <Input
                  type="password"
                  id="login-password-input"
                  onChange={(e) => this.userTyping("password", e)}
                ></Input>
              </FormControl>
              <Box m={3}></Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
            <Box m={2}></Box>
            {this.state.loginError ? (
              <Typography
                component="h5"
                variant="subtitle1"
                color="error"
                align="center"
              >
                {this.state.loginError}
              </Typography>
            ) : null}
            <Typography component="h6" variant="subtitle2" color="primary">
              Don't have an account?
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/signup">
              Signup
            </Link>
            <Box m={1}></Box>
          </Paper>
        </Container>
      </main>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      default:
        break;
    }
  };

  submitLogin = (e) => {
    e.preventDefault();
    console.log("submitting login");

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        console.log(`${userCredential.user.email} logged in.`);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(
          `Login error code=${error.code} error message=${error.message}`
        );
        this.setState({ loginError: error.message });
      });
  };
}

export default LoginComponent;
