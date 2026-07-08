import { registerUser, loginUser } from "../apis/AuthApis";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import type { LoginRequest } from "../interfaces/LoginRequest";

export const servieRegister = async (data: RegisterRequest) => {
  const response = await registerUser(data);

  return response.data;
};

export const serviceLogin = async (data: LoginRequest) => {
  const response = await loginUser(data);
  return response.data;
};