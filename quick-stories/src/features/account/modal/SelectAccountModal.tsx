import React, { useState } from "react";
import Modal from "../../../components/ui/Modal";

export const SelectAccountModal = ({
  setOpenSelectAccounts,
}: {
  setOpenSelectAccounts: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [accounts, setAccounts] = useState(
    JSON.parse(localStorage.getItem("users") || "[]"),
  );
  return (
    <Modal setOpenSelectAccounts={setOpenSelectAccounts}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p className="text-lg border-b border-gray-400  font-semibold">
            Account
          </p>
        </div>{" "}
        <AccountForm setOpenAddUser={setOpenAddUser} />
      </div>
    </Modal>
  );
};
