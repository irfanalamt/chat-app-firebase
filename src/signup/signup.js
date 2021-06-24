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
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class SignupComponent extends Component {
  render() {
    return (
      <main>
        <Container maxWidth="sm">
          <CssBaseline></CssBaseline>
          <Paper
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box m={4}></Box>
            <Typography component="h1" variant="h5">
              Signup
            </Typography>
            <form onSubmit={(e) => this.submitSignup(e)}>
              <FormControl required margin="normal">
                <InputLabel htmlFor="signup-email-input" m={4}>
                  Enter Your Email
                </InputLabel>
                <Input
                  autoComplete="email"
                  onChange={(e) => this.userTyping("email", e)}
                  autoFocus
                ></Input>
              </FormControl>
            </form>
          </Paper>
        </Container>
      </main>
    );
  }

  submitSignup = (e) => {
    console.log("Submitting signup");
  };
}

export default SignupComponent;
