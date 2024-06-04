// import React from 'react'
import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const ContainerLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ContainerLayout;
