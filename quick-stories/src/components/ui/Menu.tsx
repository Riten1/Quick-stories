import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface MenuItemConfig {
  label: string;
  onClick: () => void;
}

export const MenuDropdown = ({
  title,
  menuItems,
}: {
  title?: string | React.ReactNode;
  menuItems?: MenuItemConfig[];
}) => {
  return (
    <Menu>
      <MenuButton className="bg-gray-200 p-2 rounded-full cursor-pointer inline-flex items-center gap-2 text-sm/6 font-semibold text-white shadow-inner">
        {title}
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right ml-2 rounded-xl border border-gray-400 bg-white p-2 text-sm/6 text-gray-750 outline-none"
      >
        {menuItems?.map((item) => (
          <MenuItem key={item.label}>
            <button
              className="group hover:bg-gray-200 cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5"
              onClick={item.onClick}
            >
              {item.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
