import React, { useContext } from "react";
import "./Sidebar.scss";
import { AuthContext } from "../../context/authContext";
const Sidebar = () => {
    const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="sidebar">
      {/* Sidebar content */}
      <ul>
        <li>Dashboard</li>
        <li>Posts</li>
        <li>Users</li>
        <li onClick={logout}>Logout</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
