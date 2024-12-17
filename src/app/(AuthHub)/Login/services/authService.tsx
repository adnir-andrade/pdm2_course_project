import { api } from "../../../../services/api";

export const attemptLogin = async (email: string, password: string) => {
  try {
    const response = await api.post(
      "/api/collections/users/auth-with-password",
      {
        identity: email,
        password: password,
      },
    );

    const data = response.data;

    if (data.token) {
      console.log("Login successful");
      console.log("Token:", data.token);
      console.log("User:", data.record);
      return {
        success: true,
        message: "Login successful",
        user: data.record,
        token: data.token,
      };
    } else {
      return { success: false, message: "Login failed, no token received" };
    }
  } catch (error) {
    return { success: false, message: "Login failed" };
  }
};
