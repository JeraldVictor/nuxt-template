import { POST } from "../axios";

export const loginApi = async ({ email, password }: any) => {
  return await POST("/users/login", { email, password });
};
