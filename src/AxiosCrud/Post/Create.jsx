import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [values, setValues] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/users", values);
    navigate("/");
    setValues({ name: "", email: "" });
  }
  return (
    <div className="create-body">
      <h1>Create</h1>
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

export default Create;
