import React from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import SearchBar from "../components/searchbar/SearchBar";

export default function Home() {
  return (
    <div>
      <PageTitle
        text="Altura Frontend Engineer Technical Test"
        className="pagetitle"
      />
      <SearchBar />
    </div>
  );
}
