import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css";

const Update = () => {
  const [values, setValues] = useState({ name: "", email: "" });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, values)
      .then(() => navigate("/"));
    setValues({ name: "", email: "" });
  }
  return (
    <div className="update-body">
      <h1>Update</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        name="name"
        value={values.name}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        name="email"
        value={values.email}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Update;
