import { Bars3BottomLeftIcon, UserPlusIcon } from "@heroicons/react/24/outline";

import { AddAccountModal } from "../../features/account/modal/AddAccountModal";
import { MenuDropdown } from "../ui/Menu";
import { store } from "../../zustand/store";

const Sidebar = () => {
  const modalState = store((state) => state.isModalOpen);
  console.log("modataState", modalState);
  function toggle() {
    store.getState().toggleModal(!modalState);
  }

  return (
    <>
      <div className="p-4 border border-gray-300 h-full flex flex-col justify-between items-center">
        <p>Story</p>

        <div className="flex flex-col items-center gap-2">
          <MenuDropdown
            title={<Bars3BottomLeftIcon className="w-6 h-6 text-mist-500" />}
            menuItems={["Switch Account", "Log out"]}
          />

          <button
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
            onClick={toggle}
          >
            <UserPlusIcon className="w-6 h-6 text-mist-500" />
          </button>
        </div>
      </div>
      {modalState && <AddAccountModal setOpenAddUser={toggle} />}
    </>
  );
};

export default Sidebar;
