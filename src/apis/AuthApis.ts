import type { RegisterRequest } from "../interfaces/RegisterRequest";
import type { LoginRequest } from "../interfaces/LoginRequest";
import axiosInstance from "./AxiosConfig";

export const registerUser = async (data: RegisterRequest) => {
    return await axiosInstance.post("/auth/signup", data);
}; 

export const loginUser = async (data: LoginRequest) => {
    return await axiosInstance.post("/auth/signin", data);
};