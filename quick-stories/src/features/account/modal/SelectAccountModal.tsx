import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import type IAccountFields from "../../../@types/account";

export const SelectAccountModal = () => {
  const [accounts] = useState(
    JSON.parse(localStorage.getItem("users") || "[]"),
  );
  return (
    <Modal modalName="selectAccount">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p className="text-lg border-b border-gray-400  font-semibold">
            All Accounts
          </p>
        </div>{" "}
        <div className="flex flex-col gap-2">
          {accounts.map((account: IAccountFields, index: number) => (
            <div className="p-2 border-b border-gray-400" key={index}>
              <div className="flex gap-2">
                <div>
                  <UserCircleIcon className="w-6 h-6 text-mist-500" />
                </div>
                <p>{account.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
