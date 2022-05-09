import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";
// import { useNavigate } from "react-router-dom";

export const signin = (formData,navigate) => async (dispatch) => {
  try {
   console.log('i am in sign in acttion')
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate('/');

    console.log('sign in JWT')
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData,navigate) => async (dispatch) => {
  try {
       console.log("i am in sign up acttion");
 const { data } = await api.signUp(formData);
console.log(data);
 dispatch({ type: AUTH, data });

    console.log('sign up jWT');
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
