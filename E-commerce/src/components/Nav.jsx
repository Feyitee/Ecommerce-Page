import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
            <li>Sign in</li>
            <li>Explore now</li>
          </ul>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
