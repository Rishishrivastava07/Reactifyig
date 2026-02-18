import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import { Routes, Route } from "react-router-dom";
import CourseDetail from "./pages/CourseDetail";

import Courses from "./pages/Courses";
import Navigate from "./components/Navigate";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navigate />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/products" element={<Product />}>
       
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
