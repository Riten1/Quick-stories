import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Modal({
  children,
  setOpenAddUser,
}: {
  children: React.ReactNode;
  setOpenAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpenAddUser(false)}
      className="relative z-50 "
    >
      {" "}
      <div className="fixed inset-0 bg-black/40 flex w-screen items-center justify-center p-4">
        <XMarkIcon className="text-white w-6 absolute top-4 right-4 cursor-pointer" />
        <DialogPanel className="max-w-lg space-y-4 border rounded-xl bg-white p-12">
          {" "}
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
