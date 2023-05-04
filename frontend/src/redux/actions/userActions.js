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
const resetPassword = (token) => async (dispatch) => {
  dispatch({
    type: actionTypes.ACTIVE_USER_REQUEST,
  });
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/auth/register/active',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        token: token.token,
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
const userActions = {
  registerUser,
};

export default userActions;
