import { users } from "../../../mocks/MOCK_USER";

// TODO: Refactor everything after implementing an API
const findUserByEmail = (email: string) => {
  return users.find((user) => user.email === email);
};

// TODO: To be removed once there is an API
const checkPassword = (userPassword: string, inputPassword: string) => {
  return userPassword === inputPassword;
};

export const authenticateUser = async (email: string, password: string) => {
  const user = findUserByEmail(email);

  if (!user) return { success: false, message: "Email not found!" };

  const isPasswordCorrect = checkPassword(user.password, password);

  if (!isPasswordCorrect)
    return { success: false, message: "Email not found!" };

  return { success: true, message: "Log in successful" };
};
