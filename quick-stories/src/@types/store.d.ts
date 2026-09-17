export default interface IUseStore {
  activeModal: string | null;
  openModal: (modalName: string) => void;
  closeModal: () => void;
}
