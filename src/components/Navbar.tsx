
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import NavLogo from "./navbar/NavLogo";
import NavbarSearch from "./navbar/NavbarSearch";
import SocialIcons from "./navbar/SocialIcons";
import NavbarSubmenu from "./navbar/NavbarSubmenu";
import MobileNavbar from "./navbar/MobileNavbar";
import { MenuItem } from "./navbar/NavbarSubmenu";

const menuItems: MenuItem[] = [
  { 
    label: "Accueil", 
    path: "/" 
  },
  { 
    label: "Institution", 
    path: "/institution",
    submenu: [
      { label: "Synode", path: "/institution/synode" },
      { label: "Conseil Synodal", path: "/institution/conseil-synodal" },
      { label: "Bureau Synodal", path: "/institution/bureau-synodal" },
      { label: "Consistoire", path: "/institution/consistoire" },
    ]
  },
  { 
    label: "Départements", 
    path: "/departements",
    submenu: [
      { label: "Jeunesse", path: "/departements/jeunesse" },
      { label: "Musique", path: "/departements/musique" },
      { label: "Communication", path: "/departements/communication" },
      { label: "Femmes et Famille", path: "/departements/femmes-famille" },
      { label: "Évangélisation", path: "/departements/evangelisation" },
      { label: "Organisation", path: "/departements/organisation" },
    ]
  },
  { 
    label: "Relations", 
    path: "/relations",
    submenu: [
      { label: "Œcuménisme", path: "/relations/oecumenisme" },
      { label: "Confrérie", path: "/relations/confrerie" },
    ]
  },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  // Fonction améliorée pour vérifier si un chemin est actif
  const isActive = (path: string) => {
    // La page d'accueil ne doit être active que pour le chemin exact "/"
    if (path === '/') {
      return location.pathname === '/';
    }
    
    // Pour les autres pages, vérifier si le pathname commence par le chemin
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset le menu ouvert quand on change de page
  useEffect(() => {
    setOpenSubmenu(null);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo and social icons */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center">
            <NavLogo />
          </div>
          
          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-auto">
            <NavbarSearch />
          </div>
          
          {/* Social Media Icons */}
          <div className="hidden md:flex">
            <SocialIcons />
          </div>
        </div>

        {/* Main navigation menu */}
        <div className="flex justify-between items-center pt-2">
          <div className="md:hidden flex items-center">
            <NavLogo mini />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            {menuItems.map((item) => (
              <NavbarSubmenu
                key={item.label}
                item={item}
                isActive={isActive}
                openSubmenu={openSubmenu}
                toggleSubmenu={toggleSubmenu}
              />
            ))}
          </div>

          {/* Mobile search */}
          <div className="md:hidden">
            <button 
              onClick={() => {}} 
              className="p-2 text-gray-600 hover:text-blue-700 focus:outline-none"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNavbar 
        isOpen={isOpen}
        menuItems={menuItems}
        openSubmenu={openSubmenu}
        toggleSubmenu={toggleSubmenu}
        isActive={isActive}
        closeMenu={closeMenu}
      />
    </nav>
  );
};

export default Navbar;
