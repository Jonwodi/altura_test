import React from "react";
import "./SearchBar.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar(props) {
  const { address } = props;

  const handleAddressChange = (e) => {
    props.onAddressChange(e.target.value);
  };

  return (
    <form className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__search">
          <MagnifyingGlassIcon className="searchBar__icon" />
          <input
            type="search"
            placeholder="Enter wallet address"
            className="searchBar__input"
            value={address}
            onChange={handleAddressChange}
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
