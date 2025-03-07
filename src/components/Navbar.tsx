
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // Reset search field
    setSearchQuery("");
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
        {/* Top bar with logo and social icons */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/eec-logo.png" alt="Église Évangélique du Congo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-serif font-bold text-blue-700 hidden sm:inline">
                Église Évangélique du Congo
              </span>
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-auto">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-700"
              >
                <Search size={16} />
              </button>
            </form>
          </div>
          
          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Main navigation menu */}
        <div className="flex justify-between items-center pt-2">
          <div className="md:hidden flex items-center">
            <Link to="/" className="sm:hidden text-lg font-serif font-bold text-blue-700">
              EEC
            </Link>
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
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors",
                            isActive(subitem.path) && "bg-blue-50 text-blue-700"
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
      <div
        className={cn(
          "md:hidden bg-white",
          isOpen ? "block animate-fade-in" : "hidden"
        )}
      >
        {/* Mobile search bar */}
        <div className="p-4 border-b border-gray-100">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-700"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* Mobile menu items */}
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

        {/* Mobile social media icons */}
        <div className="flex justify-center space-x-6 py-4 border-t border-gray-100">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
