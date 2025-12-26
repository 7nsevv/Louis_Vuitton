import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import Home from "./components/Base/Home";


export default function App() {
  return ( 
  <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer />
  </>
  );
}