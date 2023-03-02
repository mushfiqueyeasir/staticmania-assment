/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const NavBar = () => {
  return (
    <div className=" bg-white sticky top-0 z-50">
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div>
            <NavLink to={"/home"} className="text-[16px]">
              <img src={logo} alt="" className="w-[130px]" />
            </NavLink>
          </div>
          <div>
            <NavLink to={"/about"} className="text-[16px]">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
