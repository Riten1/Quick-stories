import { Bars3BottomLeftIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import store from "../../zustand/store";
import { MenuDropdown } from "../ui/Menu";
import { AddAccountModal } from "../../features/account/modal/AddAccountModal";
import { SelectAccountModal } from "../../features/account/modal/SelectAccountModal";

const Sidebar = () => {
  const openModal = store((state) => state.openModal);
  const activeModal = store((state) => state.activeModal);
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
  console.log("active", activeModal);
  return (
    <>
      <div className="p-4 border border-gray-300 h-full flex flex-col justify-between items-center">
        <p>Story</p>

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
