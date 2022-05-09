// import React from 'react'

// import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core'
// import useStyles from './styles'
// import LockOutlinedIcon from "@material-ui/icons/LockOutlinedIcon ";

// const Auth=()=>{
//   const state=null;
// const classes=useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper className={classes.paper} elevation={3}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//       </Paper>
//     </Container>
//   );
// }

// export default Auth

import React, { useState } from "react";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Icon from "./icon";
// import { signin, signup } from "../../actions/auth";
// import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";
import { useDispatch } from "react-redux";
import {signin,signup} from '../../actions/auth'
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();


  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // const switchMode = () => {
  //   setForm(initialState);
  //   setIsSignup((prevIsSignup) => !prevIsSignup);
  //   setShowPassword(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (isSignup) {
      dispatch(signup(form,navigate));
    } else {
      dispatch(signin(form,navigate));
    }
  };




  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSignup(!isSignup);
  }
  const googleSuccess = async (res) => {
  const result = res?.profileObj; // if we used res.profileObj we will get error if there is nothing in res (Optional chaaining operator)
  const token = res?.tokenId;
    try {
      console.log("sign in sucessful");
      // console.log(res);
      dispatch({type:'AUTH',data:{result,token}});//data ke jagaha payload bhi likh sakte ho no worries blki kuch bhi likhdo but that should be same as in reducer/auth.js
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  };
  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");



  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        {/* <GoogleLogin
          clientId="1070033044791-6028ftan0najquv276sdbep3qjdu9q9e.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              className={classes.googleButton}
              color="primary"
              fullwidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<Icon />}
              variant="contained"
            >
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
        /> */}

        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* //if sign up karna hai tabhi firstname lastname pucho varna only email and password */}
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {/* confirming password */}
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="1070033044791-6028ftan0najquv276sdbep3qjdu9q9e.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have account? Sign In"
                  : "Don't have account ?Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;