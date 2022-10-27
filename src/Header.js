import React from "react";

export default function Header() {
  return (
    <div class="container header">
      <form id="search-city">
        <input
          type="text"
          id="city-input"
          placeholder="Type the city"
          autofocus
        />

        <input
          type="submit"
          id="submit-button"
          value="Search"
          class="btn btn-success search"
        />
        <input
          type="button"
          value="My city"
          class="btn btn-success my-city"
          id="my-city"
        />
      </form>
    </div>
  );
}
