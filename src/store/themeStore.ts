import { create } from "zustand";

type DarkModeStore = {
  theme: string | null;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  theme: localStorage.getItem("theme"),
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value }),
}));
