import React from "react";
import {Outlet} from "react-router-dom";
import NavbarUser from "./navbaruser";

const Layout2 = () => {
  return (
    <>
      <NavbarUser />
      <Outlet />
    </>
  );
};

export default Layout2;