import { create } from "zustand";

interface ColorModeStore {
  isDark: boolean;
  colorChange: () => void;
}

const useColorModeStore = create<ColorModeStore>((set) => ({
  isDark: true,
  colorChange: () => set((store) => ({ isDark:  !store.isDark })),
}));

export default useColorModeStore;
