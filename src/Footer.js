import React from "react";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/johannes-kraisler/weather-react"
        target="blank"
      >
        <p>Open-source project by Anastasiia</p>
      </a>

      <a
        href="https://github.com/johannes-kraisler/green-weather-app"
        target="_blank"
      >
        <i FontAwesomeIcon icon="fa-brands fa-github">
          {" "}
        </i>
      </a>

      <a
        href="https://www.linkedin.com/in/anastasiia-lemish-b85523184/"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </footer>
  );
}
