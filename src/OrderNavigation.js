import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
// import OrderDetail from "./pages/OrderDetail";
import Error404 from './pages/Error404/Error404'
import Error500 from './pages/Error500/Error500'

const OrderNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      {/* <Route path="/:id" element={<OrderDetail />} /> */}
      <Route path="*" element={<Error404 />} />
      <Route path="/error" element={<Error500 />} />
      </Routes>

  )
}

export default OrderNavigation;