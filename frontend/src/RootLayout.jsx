import React from 'react';
import NavbarLinks from './Common/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <NavbarLinks />
      <Outlet />
    </>
  );
};

export default RootLayout;