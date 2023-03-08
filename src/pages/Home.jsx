import React from "react";
import PageTitle from "../components/page_title/PageTitle";
import SearchBar from "../components/search_bar/SearchBar";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("elanhalpern.eth"); // wallet address

  // function to update wallet address
  const handleAddressChange = (value) => {
    setAddress(value);
  };

  // Alchemy URL
  const baseURL = `${import.meta.env.VITE_API_URL}`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;

  const displayNfts = axios.get(`${url}`, {
    withCredentials: false,
  });

  // Make the request and print the formatted response:
  async function fetchNfts() {
    console.log((await displayNfts).data);
  }
  fetchNfts();

  return (
    <div>
      <PageTitle
        text="Altura Frontend Engineer Technical Test"
        className="pageTitle"
      />
      <SearchBar address={address} onAddressChange={handleAddressChange} />
    </div>
  );
}
