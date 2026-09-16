import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { AddAccountModal } from "../../features/account/modal/AddAccountModal";

const Sidebar = () => {
  const [openAddUser, setOpenAddUser] = useState(false);
  console.log(openAddUser);

  function toggleOpen() {
    setOpenAddUser(!openAddUser);
  }
  return (
    <>
      <div className="p-4 border border-gray-300 h-full flex flex-col justify-between items-center">
        <p>Story</p>

        <div className="flex flex-col items-center gap-2">
          <p>Quick stories</p>

          <button
            className="bg-gray-200 p-2 rounded-full cursor-pointer"
            onClick={toggleOpen}
          >
            <UserPlusIcon className="w-6 h-6 text-mist-500" />
          </button>
        </div>
      </div>

      {openAddUser && <AddAccountModal setOpenAddUser={setOpenAddUser} />}
    </>
  );
};

export default Sidebar;
