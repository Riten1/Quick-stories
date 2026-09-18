import { create } from "zustand";
import type IUseStore from "../@types/store";
import type IAccountFields from "../@types/account";

export const store = create<IUseStore>((set) => ({
  activeModal: null,
  openModal: (modalName: string) => set({ activeModal: modalName }),
  closeModal: () => set({ activeModal: null }),
  accounts: JSON.parse(
    localStorage.getItem("users") || "[]",
  ) as IAccountFields[],
  currentAccount: {} as IAccountFields,
  addAccounts: (accounts: IAccountFields) =>
    set((state) => {
      const newAccounts = [...state.accounts, accounts];
      localStorage.setItem("users", JSON.stringify(newAccounts));
      return { accounts: newAccounts };
    }),
  selectAccount: (account: IAccountFields) =>
    set((state) => {
      state.currentAccount = account;
      sessionStorage.setItem("currentAccount", JSON.stringify(account));
      console.log("state", state);
      state.closeModal();
      return {};
    }),
}));

export default store;
