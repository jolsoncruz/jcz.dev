// import React from 'react'
import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const ContainerLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-50 px-7 py-32">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContainerLayout;
