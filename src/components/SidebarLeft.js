import React from "react";
import logo from "../assets/logo-dark.svg";
import SidebarMenu from "../ultis/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle ='py-8 px-[25px] text-[#32323d] text-[13px] font-bold flex gap-4 items-center';
const activeStyle = 'py-8 px-[25px] text-[#0F7070] text-[13px] font-bold flex gap-4 items-center';
const SidebarLeft = () => {
  return (
    <div className="flex flex-col bg-[#dde4e4]">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start">
        <img src={logo} alt="logo" className="w-[120px] h-10" />
      </div>
      <div className="flex flex-col">
        {SidebarMenu.map((item) => {
          return (
            <NavLink
              className={({isActive}) => isActive ? activeStyle : notActiveStyle}
              to={item.path}
              key={item.path}
              end={item.end}
            >
              {item.icons}
              <span>{item.text}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarLeft;
