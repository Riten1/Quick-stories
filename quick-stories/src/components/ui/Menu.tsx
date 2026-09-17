import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const MenuDropdown = ({
  title,
  menuItems,
  // itemOnClick,
}: {
  title?: string | React.ReactNode;
  menuItems?: string[];
  menuOnClick?: (item: string) => void;
  onClickHandler?: (item: string) => void;
}) => {
  return (
    <Menu>
      <MenuButton className="bg-gray-200  p-2 rounded-full cursor-pointer inline-flex items-center gap-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white  data-open:bg-white-700">
        {title}
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right ml-2  rounded-xl border border-gray-400 bg-white p-2 text-sm/6 text-gray-700 transition duration-100 ease-out outline-none"
      >
        {menuItems?.map((item) => (
          <MenuItem key={item}>
            <button
              className="group hover:bg-gray-200 cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5"
              // onClick={() => onClickHandler(item)}
            >
              {item}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
