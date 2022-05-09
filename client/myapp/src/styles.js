import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,18,55, 1)",
    fontFamily: '"Montserrat", Open Sans',
  },
  image: {
    marginLeft: "15px",
    height: "75px",
    width: "150px",
  },
  
  // here theme is used to make differnet styling for mobile and laptop devices that is different devices
  // [theme.breakPoints.down('sm')]:{
  //   mainContainer:{
  //     flexDirection: "column-reverse"
  //   }
  // }
 
}));
