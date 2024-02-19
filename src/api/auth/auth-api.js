import { axiosInstance } from "../axiosInterceptor";

/*________________________LOGIN_____________________________________*/
export const login = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("/authenticate", {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
