import { create } from "zustand";
import type IUseStore from "../../src/@types/store";

export const store = create<IUseStore>((set) => ({
  isModalOpen: false,
  toggleModal: (open: boolean) => set({ isModalOpen: open }),
}));
