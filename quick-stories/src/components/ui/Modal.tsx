import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          {/* <DialogTitle>Deactivate account order</DialogTitle>

          {/* ... */}
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
