import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/johannes-kraisler/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        <p>Open-source project by Anastasiia</p>
      </a>

      <a
        href="https://github.com/johannes-kraisler/green-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={"fa-brands fa-github"} />
      </a>

      <a
        href="https://www.linkedin.com/in/anastasiia-lemish-b85523184/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={"fa-brands fa-github"} />
      </a>
    </footer>
  );
}
