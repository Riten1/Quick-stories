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
import { useRef } from "react";
import { uploadImage } from "../../services/upload-image";

const Sidebar = () => {
  const openModal = store((state) => state.openModal);
  const currentAccount = store((state) => state.currentAccount);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handlePlusClick() {
    fileInputRef.current?.click();
  }
  const menuItems = [
    {
      label: "Switch account",
      onClick: () => openModal("selectAccount"),
    },
    {
      label: "Log out",
      onClick: () => {
        sessionStorage.clear();
        window.location.reload();
      },
    },
  ];
  return (
    <>
      <div className="p-4 border border-gray-300 h-full flex flex-col justify-between items-center">
        {currentAccount ? (
          <div className="relative inline-flex items-center gap-2">
            <div className="text-xl cursor-pointer bg-gray-100 w-16 h-16 flex items-center justify-center border-gray-300 border-2 rounded-full">
              {nameIcon(currentAccount?.name)}
            </div>
            <span
              onClick={handlePlusClick}
              className="cursor-pointer absolute bg-white p-0.5 rounded-full bottom-0 right-0 shadow-sm"
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    console.log("Selected file:", file);
                    uploadImage(file);
                  }
                }}
              />
              {!currentAccount?.hasStories && <PlusIcon className="w-5 h-5" />}
            </span>
          </div>
        ) : (
          <p>Story</p>
        )}

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
