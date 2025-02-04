import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SidebarLeft, SidebarRight } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex bg-[#ced9d9]">
      <div className="w-[240px] flex-none border border-blue-500">
        <SidebarLeft />
      </div>
      <div className="flex-auto">
        <div className="h-[70px] px-[59px] flex items-center w-full">
          <Header />
        </div>
        <Outlet />
      </div>
      <div className="w-[330px] flex-none">
        <SidebarRight />
      </div>
    </div>
  );
};

export default Public;
