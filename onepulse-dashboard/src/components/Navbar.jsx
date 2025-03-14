import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#fff] shadow-md p-4 mt-0 flex justify-between items-center">
    
      <div>
        <span>
          <h6 className="">Hi Andrei,</h6>
        </span>
        <h1 className="text-xl font-bold">Welcome to OnePulse!</h1>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md p-2 pl-10"
          />
          <Search className="absolute left-2 top-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
