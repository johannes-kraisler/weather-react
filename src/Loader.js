import React from "react";
import { Rings } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <Rings height="130" width="80" color="blue" radius="8" visible={true} />
    </div>
  );
}
