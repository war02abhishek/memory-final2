import {
 AUTH,LOGOUT
} from "../constants/actionTypes";

const authReducer=(state={authData:null},action)=>{

    switch (action.type) {
      case AUTH:
        console.log("Dispatched succesfully to reducer");
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        //Here insted of pushing our data in redux store we are pushing it in local storage
        // console.log(action?.data);
        console.log("added to local stoarge succesfully");

        return {...state,authData:action?.data};//what is significance of this return????????
      case LOGOUT:
          localStorage.clear();
          return { ...state, authData:null };


      default:
        return state;
    }
}
export default authReducer;