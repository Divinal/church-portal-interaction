import React, { useState } from "react";
import { Search } from "lucide-react";

interface NavbarSearchProps {
  mobile?: boolean;
}

const NavbarSearch = ({ mobile = false }: NavbarSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // Reset search field
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSearch} className={`${mobile ? "w-full" : "w-full max-w-xs"} relative`}>
      <input
        type="text"
        placeholder="Rechercher..."
        className={`w-full ${
          mobile 
            ? "px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
            : "px-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        }`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button 
        type="submit" 
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-700"
      >
        <Search size={mobile ? 18 : 16} />
      </button>
    </form>
  );
};

export default NavbarSearch;

