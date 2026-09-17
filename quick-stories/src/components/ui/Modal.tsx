import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { store } from "../../zustand/store";

export default function Modal({
  modalName,
  children,
}: {
  modalName: string;
  children: React.ReactNode;
}) {
  const activeModal = store((state) => state.activeModal);
  const closeModal = store((state) => state.closeModal);

  const isOpen = activeModal === modalName;

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 flex w-screen items-center justify-center p-4">
        <XMarkIcon
          className="text-white w-6 absolute top-4 right-4 cursor-pointer"
          onClick={closeModal}
        />
        <DialogPanel className="max-w-lg space-y-4 border rounded-xl bg-white p-12">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
