
import React from "react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./NavbarSubmenu";
import NavbarSubmenu from "./NavbarSubmenu";
import NavbarSearch from "./NavbarSearch";
import SocialIcons from "./SocialIcons";

interface MobileNavbarProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  openSubmenu: string | null;
  toggleSubmenu: (label: string) => void;
  isActive: (path: string) => boolean;
  closeMenu: () => void;
}

const MobileNavbar = ({ 
  isOpen, 
  menuItems, 
  openSubmenu, 
  toggleSubmenu, 
  isActive,
  closeMenu
}: MobileNavbarProps) => {
  return (
    <div
      className={cn(
        "md:hidden bg-white",
        isOpen ? "block animate-fade-in" : "hidden"
      )}
    >
      {/* Mobile search bar */}
      <div className="p-4 border-b border-gray-100">
        <NavbarSearch mobile />
      </div>

      {/* Mobile menu items */}
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems.map((item) => (
          <NavbarSubmenu
            key={item.label}
            item={item}
            mobile={true}
            isActive={isActive}
            openSubmenu={openSubmenu}
            toggleSubmenu={toggleSubmenu}
            closeMenu={closeMenu}
          />
        ))}
      </div>

      {/* Mobile social media icons */}
      <div className="flex justify-center space-x-6 py-4 border-t border-gray-100">
        <SocialIcons size={20} />
      </div>
    </div>
  );
};

export default MobileNavbar;
