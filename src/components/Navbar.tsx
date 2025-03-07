
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
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
  
  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const isActive = (path: string) => {
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

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-church-DEFAULT">
                Église Évangélique du Congo
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-church-DEFAULT focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            {menuItems.map((item) => (
              <div key={item.label} className="relative ml-4 group">
                {item.submenu ? (
                  <>
                    <button 
                      onClick={() => toggleSubmenu(item.label)}
                      className={cn(
                        "flex items-center nav-link",
                        isActive(item.path) && "nav-link-active"
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
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-church-light hover:text-church-DEFAULT transition-colors",
                            isActive(subitem.path) && "bg-church-light text-church-DEFAULT"
                          )}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "nav-link",
                      isActive(item.path) && "nav-link-active"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden bg-white",
          isOpen ? "block animate-fade-in" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={cn(
                      "w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-church-DEFAULT",
                      isActive(item.path) && "text-church-DEFAULT font-medium"
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
                            isActive(subitem.path) && "text-church-DEFAULT font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 text-gray-700 hover:text-church-DEFAULT",
                    isActive(item.path) && "text-church-DEFAULT font-medium"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
