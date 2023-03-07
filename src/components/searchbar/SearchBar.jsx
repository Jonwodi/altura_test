import React from "react";
import "./SearchBar.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  return (
    <form className="searchbar">
      <div className="searchbar__container">
        <div className="searchbar__search">
          <MagnifyingGlassIcon className="searchbar__icon" />
          <input
            type="search"
            placeholder="Search address"
            className="searchbar__input"
          />
        </div>
        <button className="searchbar__button">Search</button>
      </div>
    </form>
  );
}
