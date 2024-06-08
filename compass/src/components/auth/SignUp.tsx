import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  // state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [checkedTandC, setCheckedTandC] = useState(false);
  const [checkedTandCErr, setCheckedTandCErr] = useState(false);
  const [usedEmail, setUsedEmail] = useState(false);

  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserSignedIn(true);
        navigate("/");
        console.log("User is signed in");
      } else {
        setUserSignedIn(false);
        console.log("User is not signed in");
      }
    });
  });

  // Regex for email validation
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Function to Signin with email and password
  const SignUp = async () => {
    console.log(firstName, lastName, email, password);
    // Validating all inputs
    if (firstName === "" || lastName === "") {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (email === "" || !emailRegex.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (password.length < 6) {
      setPasswordEmpty(true);
    } else {
      setPasswordEmpty(false);
    }

    if (!checkedTandC) {
      setCheckedTandCErr(true);
    } else {
      setCheckedTandCErr(false);
    }
    // Send sign in request if all inputs are valid
    if (!nameErr && !emailErr && !passwordEmpty) {
      //sign up
      try {
        console.log(auth, email, password);
        await createUserWithEmailAndPassword(auth, email, password);
        //creating firestore documents if signUp successful
        createUser();
      } catch (error) {
        if ((error as FirebaseError).code === "auth/email-already-in-use") {
          setUsedEmail(true);
        } else {
          console.log(error);
        }
      }

      //sign in
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error(error);
      }
      console.log(auth.currentUser?.uid);
    }
  };

  const createUser = async () => {
    const userId = auth.currentUser?.uid || ""; // Ensure userId is always a string
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        userEmail: email,
        profilePic: "",
        tokens: 100,
      };

      await setDoc(doc(db, "userDetails", userId), userDetails);
    } catch (e) {
      console.error(e);
    }
  };

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e: any) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e: any) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  error={emailErr || usedEmail} // Add the error prop here
                  helperText={
                    emailErr
                      ? "Enter a valid email"
                      : usedEmail
                      ? "Email already in use"
                      : ""
                  } // Add the helperText prop here
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      checked={checkedTandC}
                      onChange={(e) => setCheckedTandC(e.target.checked)}
                      name="checkedTandC"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                console.log(firstName, lastName, email, password);
                SignUp();
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
