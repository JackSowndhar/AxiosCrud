import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Read.css";

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => setData(data.filter((item) => item.id !== id)))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="header">
        <h1>Axios Crud</h1>
        <Link to="/create">
          <button>Create +</button>
        </Link>
      </div>

      <table className="table" border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/update/${item.id}`}>
                  <button className="update">Update</button>
                </Link>
                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
