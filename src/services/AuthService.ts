import { registerUser } from "../apis/AuthApis";
import type { RegisterRequest } from "../interfaces/RegisterRequest";

export const servieRegister = async (data: RegisterRequest) => {
  const response = await registerUser(data);

  return response.data;
};