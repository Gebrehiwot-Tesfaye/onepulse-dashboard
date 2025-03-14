import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="flex flex-col   h-screen">
      
      <div className="flex flex-1">
        
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
