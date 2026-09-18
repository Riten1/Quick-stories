import {
  Bars3BottomLeftIcon,
  PlusIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import store from "../../zustand/store";
import { MenuDropdown } from "../ui/Menu";
import { AddAccountModal } from "../../features/account/modal/AddAccountModal";
import { SelectAccountModal } from "../../features/account/modal/SelectAccountModal";
import nameIcon from "../../utils/nameIcon";

const Sidebar = () => {
  const openModal = store((state) => state.openModal);
  const currentAccount = store((state) => state.currentAccount);
  const menuItems = [
    {
      label: "Switch account",
      onClick: () => openModal("selectAccount"),
    },
    {
      label: "Log out",
      onClick: () => console.log("Log out clicked"),
    },
  ];
  return (
    <>
      <div className="p-4 border border-gray-300 h-full flex flex-col justify-between items-center">
        <div className="relative items-center gap-2">
          <p className="text-xl cursor-pointer bg-gray-100 p-3 border-gray-300 border-3 rounded-full">
            {nameIcon(currentAccount?.name)}
          </p>
          <span className="cursor-pointer absolute bg-white p rounded-full bottom-0 right-0">
            {!currentAccount?.hasStories && <PlusIcon className="w-5 h-5" />}
          </span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <MenuDropdown
            title={<Bars3BottomLeftIcon className="w-6 h-6 text-mist-500" />}
            menuItems={menuItems}
          />

          <button
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
            onClick={() => openModal("addAccount")}
          >
            <UserPlusIcon className="w-6 h-6 text-mist-500" />
          </button>
        </div>
      </div>

      <AddAccountModal />
      <SelectAccountModal />
    </>
  );
};

export default Sidebar;
