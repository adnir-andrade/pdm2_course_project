import { create } from "zustand";

type State = {
  userId: string;
  username: string;
  token: string | null;
};

type Actions = {
  login: (newUsername: string, token: string, userId: string) => void;
  logout: () => void;
};

const useUserState = create<State & Actions>((set) => ({
  userId: "",
  username: "No Active User",
  token: null,
  login: (newUsername: string, token: string, userId: string) => {
    set({ username: newUsername, token: token, userId: userId });
  },
  logout: () => {
    set({ username: "", token: null });
  },
}));

export default useUserState;
