export default interface IUseStore {
  activeModal: string | null;
  openModal: (modalName: string) => void;
  closeModal: () => void;
  accounts: IAccountFields[];
  addAccounts: (accounts: IAccountFields) => void;
  currentAccount: IAccountFields;
  selectAccount: (account: IAccountFields) => void;
}
