import React from "react";
import PageTitle from "../components/page_title/PageTitle";
import SearchBar from "../components/search_bar/SearchBar";

export default function Home() {
  return (
    <div>
      <PageTitle
        text="Altura Frontend Engineer Technical Test"
        className="pageTitle"
      />
      <SearchBar />
    </div>
  );
}
