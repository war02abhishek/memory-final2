import React,{useState,useEffect} from "react";
import smr from "../../images/smr.jpg";
import { AppBar, Avatar, Toolbar, Typography,Button } from "@material-ui/core";
import useStyle from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate,useLocation} from "react-router-dom";

const Navbar = () => {
  const classes = useStyle();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation();


  const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')));//retrive from local storge
// console.log(user);

  const logout=()=>{
     dispatch({type:'LOGOUT'});
     navigate('/');
     setUser(null);

  }


// here we used UseEffect because we need to refresh after login
useEffect(()=>{

  const token=user?.token;
  //jwt..
  setUser(JSON.parse(localStorage.getItem("profile")));

},[location])//as soon as location changes it will refresh/ location change means=/auth to /

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="center"
        >
          SOME MEMORIES
        </Typography>
        <img className={classes.image} src={smr} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            color="primary"
            component={Link}
            to="/auth"
            variant="contained"
          >
            Sign IN
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
