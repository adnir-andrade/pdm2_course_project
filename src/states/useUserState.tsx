import { create } from "zustand";

type State = {
  username: string;
  token: string | null;
};

type Actions = {
  login: (newUsername: string, token: string) => void;
  logout: () => void;
};

const useUserState = create<State & Actions>((set) => ({
  username: "No Active User",
  token: null,
  login: (newUsername: string, token: string) => {
    set({ username: newUsername, token });
  },
  logout: () => {
    set({ username: "", token: null });
  },
}));

export default useUserState;
