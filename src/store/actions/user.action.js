import Cookies from "universal-cookie";
import { BASE_URL } from "../../utils/constants/url";
const cookies = new Cookies();
export const LOGIN = "LOGIN";
export const CONTINUE_SESSION = "CONTINUE_SESSION";
export const SIGN_UP = "SIGN_UP";
export const CLEAN_STATE = "CLEAN_STATE";
export const CLEAR_ALERT = "CLEAR_ALERT";
export const SET_FAVORITES = "SET_FAVORITES";
export const POST_CART = "POST_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const CONFIRM_PURCHASE = "CONFIRM_PURCHASE";
export const UPDATE_USER = "UPDATE_USER";
export const login = (dataUser) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      if (!response.ok) {
        const throwError = {
          status: response.status || 404,
          message: data.message || "Ha ocurrido un error",
        };
        throw throwError;
      }
      cookies.set("tk", data.access_token, { maxAge: 1000000, path: "/" });

      dispatch({
        type: LOGIN,
        payload: {
          access_token: data.access_token,
          dataUser: data.dataUser,
          alert: {
            status: "success",
            message: `Bienvenido ${data.dataUser.name}`,
          },
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN,
        payload: {
          alert: {
            status: "error",
            message: `${error.message}`,
          },
        },
      });
    }
  };
};

export const continueSession = (access_token) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/user/getDataUser`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        const throwError = {
          status: response.status || 404,
          message: data.message || "Ha ocurrido un error",
        };
        throw throwError;
      }
      const { dataUser } = data;

      dispatch({
        type: CONTINUE_SESSION,
        payload: {
          access_token,
          dataUser,
          alert: {
            status: "success",
            message: `Bienvenido ${data.dataUser.name}`,
          },
        },
      });
    } catch (error) {
      cookies.remove("tk", { path: "/" });
      dispatch({
        type: CLEAN_STATE,
        payload: {
          alert: {
            status: "error",
            message: `¡Sesión expirada!`,
          },
        },
      });
    }
  };
};

export const signup = (signup_data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "post",
        body: signup_data,
      });
      const data = await response.json();
      if (!response.ok) {
        const throwError = {
          status: response.status || 404,
          message: data.message || "Ha ocurrido un error",
        };
        throw throwError;
      }
      const { dataUser, access_token } = data;
      cookies.set("tk", access_token, { maxAge: 1000000 });
      dispatch({
        type: SIGN_UP,
        payload: {
          access_token,
          dataUser,
          alert: { status: "success", message: "Registrado con exito" },
        },
      });
    } catch (error) {
      cookies.remove("tk", { path: "/" });
      dispatch({
        type: CLEAN_STATE,
        payload: {
          alert: {
            status: "error",
            message: `${error.message}`,
          },
        },
      });
    }
  };
};

export const setFavorites = (access_token, productId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/products/setFavorites`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ productId }),
      });
      const dataUser = await response.json();
      dispatch({ type: SET_FAVORITES, payload: dataUser.dataUser });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postCart = (access_token, dataProduct, message) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/cart/postProductCart`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ ...dataProduct }),
      });
      const dataUser = await response.json();
      dispatch({
        type: POST_CART,
        payload: {
          dataUser: dataUser.dataUser,
          alert: {
            status: "success",
            message: `${message}`,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductCart = (access_token, dataProduct) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/cart/deleteProductCart`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({ ...dataProduct }),
      });
      const dataUser = await response.json();
      dispatch({
        type: DELETE_PRODUCT_CART,
        payload: {
          dataUser: dataUser.dataUser,
          alert: {
            status: "success",
            message: `Eliminado del carrito`,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearAlert = () => ({
  type: CLEAR_ALERT,
});
export const updateUser = (dataUser) => ({
  type: UPDATE_USER,
  payload: dataUser,
});
