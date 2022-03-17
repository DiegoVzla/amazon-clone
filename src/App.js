import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM
    //assigns path and components that will render for each path.
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]} />

          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          {/* Root path */}
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
