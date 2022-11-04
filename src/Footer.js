import React from "react";
import "./Footer.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/johannes-kraisler/green-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-github " aria-hidden="true"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/anastasiia-lemish-b85523184/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-linkedin " aria-hidden="true"></i>
      </a>
    </footer>
  );
}
