import React from "react";
import "./Table.scss";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Table = ({ data }) => {
  const navigate = useNavigate();
  const handleDelete = async (postId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`/posts/${postId}`).then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            navigate("/");
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin-dashboard-table">
      <Link className="link" to="/write">
        <button>Add New Blog</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Author</th>
            <th>Title</th>
            <th>Image</th>
            <th>Category</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item?.id}>
              <td>{index + 1}</td>
              <td>{item?.author?.username}</td>
              <td>{item?.title}</td>
              <td>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={`../upload/${item?.img}`}
                  alt="image"
                />
              </td>
              <td>{item.cat}</td>
              <td>{moment(item?.createdAt).format("MMMM Do YYYY")} </td>
              <td>
                <Link to={`/write?edit=2`} state={item}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
