import React from "react";
import "./App.css";

import Header from "./Header.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import "./Responsive.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Weather defaultCity="Toronto" />
      <Footer />
    </div>
  );
}
