import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { github } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={fa-brands fa-github} />
      </a>

      <a
        href="https://www.linkedin.com/in/anastasiia-lemish-b85523184/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </footer>
  );
}
