import React from "react";
import ReactDOM from "react-dom";
import OrderNavigation from "./OrderNavigation";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <OrderNavigation />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
