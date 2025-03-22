
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MenuItem {
  label: string;
  path: string;
  submenu?: MenuItem[];
}

interface NavbarSubmenuProps {
  item: MenuItem;
  mobile?: boolean;
  isActive: (path: string) => boolean;
  openSubmenu: string | null;
  toggleSubmenu: (label: string) => void;
  closeMenu?: () => void;
}

const NavbarSubmenu = ({ 
  item, 
  mobile = false, 
  isActive, 
  openSubmenu,
  toggleSubmenu,
  closeMenu
}: NavbarSubmenuProps) => {
  const location = useLocation();
  
  // Fonction améliorée pour vérifier si un item ou ses sous-items sont actifs
  const isItemActive = (item: MenuItem): boolean => {
    // Vérifier si l'item actuel correspond au chemin
    if (location.pathname === item.path) return true;
    
    // Vérifier les sous-menus
    if (item.submenu) {
      return item.submenu.some(subitem => 
        location.pathname === subitem.path || 
        location.pathname.startsWith(`${subitem.path}/`)
      );
    }
    
    return false;
  };

  if (!item.submenu) {
    return (
      <Link
        to={item.path}
        className={cn(
          mobile
            ? "block px-3 py-2 text-gray-700 hover:text-church-DEFAULT"
            : "nav-link",
          (location.pathname === item.path) && (mobile ? "text-church-DEFAULT font-medium" : "nav-link-active")
        )}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  if (mobile) {
    return (
      <div key={item.label}>
        <button
          onClick={() => toggleSubmenu(item.label)}
          className={cn(
            "w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-church-DEFAULT",
            isItemActive(item) && "text-church-DEFAULT font-medium"
          )}
        >
          {item.label}
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform",
              openSubmenu === item.label && "rotate-180"
            )}
          />
        </button>
        {openSubmenu === item.label && (
          <div className="pl-4 space-y-1 animate-fade-in">
            {item.submenu.map((subitem) => (
              <Link
                key={subitem.path}
                to={subitem.path}
                className={cn(
                  "block px-3 py-2 text-sm text-gray-600 hover:text-church-DEFAULT",
                  location.pathname === subitem.path && "text-church-DEFAULT font-medium"
                )}
                onClick={closeMenu}
              >
                {subitem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop submenu
  return (
    <div className="relative ml-4 group">
      <button 
        onClick={() => toggleSubmenu(item.label)}
        className={cn(
          "flex items-center nav-link",
          isItemActive(item) && "nav-link-active"
        )}
      >
        {item.label}
        <ChevronDown size={16} className="ml-1" />
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50 transform scale-0 group-hover:scale-100 transition-transform origin-top">
        {item.submenu.map((subitem) => (
          <Link
            key={subitem.path}
            to={subitem.path}
            className={cn(
              "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors",
              location.pathname === subitem.path && "bg-blue-50 text-blue-700"
            )}
          >
            {subitem.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarSubmenu;
