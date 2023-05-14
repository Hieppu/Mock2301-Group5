import axios from 'axios';
import actionTypes from '../constants/constants';

const registerUser = (user) => async (dispatch) => {
  dispatch({
    type: actionTypes.USER_SIGNUP_REQUEST,
  });
  try {
    const response = await axios.post('/api/auth/register', {
      ...user,
    });
    dispatch({
      type: actionTypes.USER_SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNUP_FAIL,
      payload: {
        statusCode: error.response.status,
        message: error.response.data,
      },
    });
  }
};
const activeAccount = (token) => async (dispatch) => {
  dispatch({
    type: actionTypes.ACTIVE_USER_REQUEST,
  });
  try {
    const response = await axios({
      method: 'PUT',
      url: `/api/auth/register/active?token=${token}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: actionTypes.ACTIVE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ACTIVE_USER_FAIL,
      payload: {
        statusCode: error.response.status,
        message: error.response.data,
      },
    });
  }
};


const cardAPI =() => async (dispatch) =>{
  dispatch({
    type: actionTypes.API_REQUEST
  });
  try{
    const response = await axios({
      method: 'GET',
      url: 'https://645e5f408d08100293fdef79.mockapi.io/api/v1/card/' 
    });
    dispatch({
      type:actionTypes.API_SUCCESS,
      payload: response.data
    })
    // console.log(response.data);
  }
  catch (err){
    dispatch({
      type: actionTypes.API_FAIL,
      // payload: err.response.data
    })
  }
}
const userActions = {
  registerUser,
  activeAccount,
  cardAPI
};

export default userActions;
