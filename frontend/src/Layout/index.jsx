import React, { useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header"
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/';

  // Apply different background styles based on the current route
  const headerStyle = isHomePage ? 'bg-transparent' : 'bg-white';
  return (
    <div
      className={`${open ? "h-screen overflow-y-hidden md:min-h-screen md:overflow-y-visible" : "min-h-screen"} overflow-x-hidden flex flex-col justify-between text-white bg-sky-600`}
    >
      <div>
        <Header open={open} setOpen={setOpen} headerStyle={headerStyle} />
      </div>
      <div className={`text-black flex-1`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout