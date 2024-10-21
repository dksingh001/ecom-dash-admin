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

export const postactions = (prop) => async(dispatch) => {
    dispatch ({type: 'POST_DATA_REQUEST'});

    try {
      const data = await postdata(prop);
      dispatch({ type: 'POST_DATA_SUCCESS', payload :data})
    } catch (error) {
      dispatch({ type: 'POST_DATA_FAILURE', payload : error.message})
    }
  };