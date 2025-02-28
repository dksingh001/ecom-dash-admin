import { type } from "@testing-library/user-event/dist/type";
import {getdata, postdata} from "../utils/api"

export const getactions = () => async(dispatch) => {
  dispatch ({type: 'GET_DATA_REQUEST'});

  try {
    const data = await getdata();
    dispatch({ type: 'GET_DATA_SUCCESS', payload :data})
  } catch (error) {
    dispatch({ type: 'GET_DATA_FAILURE', payload : error.message})
  }
};

export const AdminLogin = (prop) => async(dispatch) => {
    dispatch ({type: 'POST_DATA_REQUEST'});

    try {
      const data = await postdata(prop);
      dispatch({ type: 'POST_DATA_SUCCESS', payload :data})
      
      if (data.success) {
        localStorage.setItem("token", JSON.stringify(data.token))   //store token in local storage
        localStorage.setItem("user", JSON.stringify(data.user))  // store user info

      //   dispatch({
      //     type: "LOGIN SUCCESS", 
      //     payload: data,
      //   })
      //  } else {
      //   dispatch({
      //     type: "LOGIN FAILURE",
      //     payload:data.message,
      //   })
        
      }
    } catch (error) {
      dispatch({ type: 'POST_DATA_FAILURE', payload : error.message})
    }
};
