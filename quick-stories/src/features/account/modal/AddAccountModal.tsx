import Modal from "../../../components/ui/Modal";
import { AccountForm } from "../form/AccountForm";

export const AddAccountModal = () => {
  return (
    <Modal modalName="addAccount">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p className="text-lg border-b border-gray-400  font-semibold">
            Account
          </p>
        </div>{" "}
        <AccountForm />
      </div>
    </Modal>
  );
};
