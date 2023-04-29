import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import { axiosInstance } from "../config";

export const login = async (user,dispatch)=>{
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post("auth/login", {mode:'no-cors'},user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
            dispatch(loginFailure());
    }
};