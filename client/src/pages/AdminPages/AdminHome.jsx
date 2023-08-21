import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AdminHome.scss"; 
import { useLocation } from "react-router-dom";
import axios from "axios";

const AdminHome = () => {
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/posts${cat}`);
          setPosts(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    const tableData = [
        { id: 1, title: "Post 1", author: "Admin", createdDate: "2023-08-10" },
        { id: 2, title: "Post 2", author: "Admin", createdDate: "2023-08-11" },
        { id: 3, title: "Post 3", author: "User 1", createdDate: "2023-08-12" },
        { id: 4, title: "Post 4", author: "User 2", createdDate: "2023-08-13" },
      ];
  return (
    <div className="admin-home">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="content">
        <h1>Admin Dashboard</h1>
        <Table data={posts} />
      </div>
    </div>
  );
};

export default AdminHome;
