import { create } from "zustand";
import { Character } from "../schemas/Character";

type State = {
  character: Character | null;
};

type Actions = {
  setCharacter: (newCharacter: Character) => void;
  clearCharacter: () => void;
};

const useCharacterState = create<State & Actions>((set) => ({
  character: null,
  setCharacter: (newCharacter: Character) => {
    set({ character: newCharacter });
  },
  clearCharacter: () => {
    set({ character: null });
  },
}));

export default useCharacterState;
