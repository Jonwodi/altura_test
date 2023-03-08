import React from "react";
import "./SearchBar.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function SearchBar() {
  const [address, setAddress] = useState("");

  return (
    <form className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__search">
          <MagnifyingGlassIcon className="searchBar__icon" />
          <input
            type="search"
            placeholder="Enter address"
            className="searchBar__input"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <button
          className="searchBar__button"
          onClick={() => {
            getNFTs();
          }}>
          Search
        </button>
      </div>
    </form>
  );
}
