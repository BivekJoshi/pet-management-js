import toast from "react-hot-toast";

const STORAGE_KEY = "token";
const USER_TYPE = "userType";
const CART_LIST = "cart";

export const setUser = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const setUserType = (data) => {
  localStorage.setItem(USER_TYPE, JSON.stringify(data));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

export const getUserType = () => {
  return JSON.parse(localStorage.getItem(USER_TYPE));
};

export const removeUser = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.clear();
};

export const setCartList = (data) => {
  const existingCartData = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCartData = [...existingCartData, data];
  localStorage.setItem('cart', JSON.stringify(updatedCartData));
  toast.success("Added product to your wishlist successfully");
};

export const getCartList = () => {
  return JSON.parse(localStorage.getItem(CART_LIST));
};
