import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white mb-10 mt-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary cursor-pointer" : " cursor-pointer"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? "text-primary cursor-pointer" : " cursor-pointer"
        }
      >
        Movie
      </NavLink>
    </header>
  );
}
