import React from "react";

export default function Header() {
  return (
    <div class="container header">
      <form className="text-center ">
        <input
          type="text"
          className="w-50"
          placeholder="Type the city"
          autofocus
        />

        <span className="m-1">
          <input type="submit" value="Search" class="btn btn-primary" />
        </span>
        <span className="m-1">
          <input type="button" value="My city" class="btn btn-primary" />
        </span>
      </form>
    </div>
  );
}
