import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM
    //assigns path and components that will render for each path.
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={[<Checkout />]} />
          {/* Root path */}
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
