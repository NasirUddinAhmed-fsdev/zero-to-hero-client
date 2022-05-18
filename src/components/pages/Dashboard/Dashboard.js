import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../shared/Sidebar";

const Dashboard = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default Dashboard;
