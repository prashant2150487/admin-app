import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
};

export default App;
