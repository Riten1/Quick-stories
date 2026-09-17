import { create } from "zustand";
import type IUseStore from "../@types/store";

export const store = create<IUseStore>((set) => ({
  activeModal: null,
  openModal: (modalName: string) => set({ activeModal: modalName }),
  closeModal: () => set({ activeModal: null }),
}));

export default store;
