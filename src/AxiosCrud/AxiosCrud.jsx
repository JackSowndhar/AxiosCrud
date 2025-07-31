import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Get/Read";
import Create from "./Post/Create";
import Update from "./Put/Update";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
