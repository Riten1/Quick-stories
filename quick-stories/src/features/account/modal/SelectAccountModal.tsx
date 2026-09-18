import Modal from "../../../components/ui/Modal";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import type IAccountFields from "../../../@types/account";
import store from "../../../zustand/store";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const SelectAccountModal = () => {
  const accounts = store((state) => state.accounts);

  return (
    <Modal modalName="selectAccount">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p className="text-lg border-b border-gray-400  font-semibold">
            All Accounts
          </p>
        </div>{" "}
        {accounts?.length === 0 && (
          <div className="flex justify-center items-center">
            <p className="text-md flex gap-2 border-gray-300">
              <ExclamationTriangleIcon className="w-6 h-6 text-mist-500" /> No
              accounts found. Please add an account.
            </p>
          </div>
        )}
        <div className="flex flex-col gap-2">
          {accounts?.map((account: IAccountFields, index: number) => (
            <div
              className="p-2 cursor-pointer border-b border-gray-300"
              key={index}
              onClick={() => store.getState().selectAccount(account)}
            >
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
