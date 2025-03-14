import React from "react";
import { Home, MessageSquare, Settings, LogOut } from "lucide-react";
import logo from "../../public/image/logo.png";

const Sidebar = () => {
  return (
    <aside className="bg-[#fff] text-black shadow-bg-gray-100 w-[15rem] h-full p-4 flex flex-col">
      <img src={logo} alt="" />

      <h2 className="text-lg font-bold mt-5">Dashboard</h2>
      <ul className="flex-1">
        <li className="flex items-center py-2 hover:bg-blue-700 cursor-pointer">
          <Home className="mr-2" />
          <span>Campaigns</span>
        </li>
        <li className="flex items-center py-2 hover:bg-blue-700 cursor-pointer">
          <MessageSquare className="mr-2" />
          <span>Message Template</span>
        </li>
        <li className="flex items-center py-2 hover:bg-blue-700 cursor-pointer">
          <Settings className="mr-2" />
          <span>Settings</span>
        </li>
      </ul>
      <div className="flex items-center py-2 text-red-500 cursor-pointer">
        <LogOut className="mr-2" />
        <span>Log Out</span>
      </div>
    </aside>
  );
};

export default Sidebar;
