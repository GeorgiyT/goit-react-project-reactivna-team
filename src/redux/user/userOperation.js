import axiosInstance from "../../utils/axiosInstance";
import token from "../auth/token";
import { getUserError, getUserSuccess } from "./userActions";

export const getUserOperation = () => async (dispatch, getState) => {
  token.set(getState().auth.tokens.accessToken);
  try {
    const { data } = await axiosInstance.get("/user");
    dispatch(getUserSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(getUserError(error));
  }
};
