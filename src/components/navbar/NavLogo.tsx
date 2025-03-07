
import React from "react";
import { Link } from "react-router-dom";

interface NavLogoProps {
  mini?: boolean;
}

const NavLogo = ({ mini = false }: NavLogoProps) => {
  if (mini) {
    return (
      <Link to="/" className="text-lg font-serif font-bold text-blue-700">
        EEC
      </Link>
    );
  }

  return (
    <Link to="/" className="flex items-center">
      <img src="/images/eec-logo.png" alt="Église Évangélique du Congo" className="h-10 w-auto mr-3" />
      <span className="text-xl font-serif font-bold text-blue-700 hidden sm:inline">
        Église Évangélique du Congo
      </span>
    </Link>
  );
};

export default NavLogo;
