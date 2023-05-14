import actionTypes from '../constants/constants';

const initState = {
  isLoading: false,
  user: {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: '',
  },
  listCard: [],
  messageRegisterSuccess: null,
  messageActiveSuccess: null,
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
    case actionTypes.ACTIVE_USER_REQUEST:
      return {
        ...state,
        // isLoading: true,
      };
    case actionTypes.ACTIVE_USER_SUCCESS:
      return {
        ...state,
        // isLoading: false,
      };
    case actionTypes.ACTIVE_USER_FAIL:
      return {
        ...state,
        // isLoading: false,
        messageActiveSuccess: 'Bạn đã kích hoạt thành công',
      };



      // card data
      case actionTypes.API_REQUEST:
        return{
          ...state
        }
      case actionTypes.API_SUCCESS:
        return{
          ...state,
          listCard: action.payload,
        }
      case actionTypes.API_FAIL:
        return{
          ...state
        }
    default:
      return state;
  }
};

export default userReducer;
