import {
  LOGIN,
  CONTINUE_SESSION,
  CLEAN_STATE,
  SIGN_UP,
  CLEAR_ALERT,
  SET_FAVORITES,
  POST_CART,
  DELETE_PRODUCT_CART,
  CONFIRM_PURCHASE,
  UPDATE_USER,
} from "../actions/user.action";
const INITIAL_STATE = {
  access_token: null,
  dataUser: null,
  alert: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const { access_token, dataUser, alert } = action.payload;
      return { ...state, access_token, dataUser, alert };
    case CONTINUE_SESSION:
      const { access_token: token, dataUser: user } = action.payload;
      return { ...state, access_token: token, dataUser: user };
    case SIGN_UP:
      return {
        ...state,
        access_token: action.payload.access_token,
        dataUser: action.payload.dataUser,
        alert: action.payload.alert,
      };
    case SET_FAVORITES:
      return {
        ...state,
        dataUser: action.payload,
      };
    case POST_CART:
      return {
        ...state,
        dataUser: action.payload.dataUser,
        alert: action.payload.alert,
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        dataUser: action.payload.dataUser,
        alert: action.payload.alert,
      };
    case CONFIRM_PURCHASE:
      return {
        ...state,
        dataUser: action.payload.dataUser,
        alert: action.payload.alert,
      };
    case UPDATE_USER:
      return {
        ...state,
        dataUser: action.payload,
      };
    case CLEAN_STATE:
      return {
        ...state,
        dataUser: null,
        access_token: null,
        alert: action.payload.alert || null,
      };
    case CLEAR_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
export default UserReducer;
