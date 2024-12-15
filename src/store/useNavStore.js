import { create } from "zustand";

const useNavStore = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useNavStore;
