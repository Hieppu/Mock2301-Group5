import actionTypes from '../constants/constants';

const initState = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    password: '',
  },
  messageRegisterSuccess: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_REQUEST:
      return {
        ...state,
        // isLoading: true,
      };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        // isLoading: false,
      };
    case actionTypes.USER_SIGNUP_FAIL:
      return {
        ...state,
        // isLoading: false,
        messageRegisterSuccess: 'Bạn đã đăng ký thành công xin hãy vào gmail active tài khoản',
      };

    default:
      return state;
  }
};

export default userReducer;
