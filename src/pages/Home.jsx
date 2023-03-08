import React, { useEffect, useState } from "react";
import PageTitle from "../components/page_title/PageTitle";
import SearchBar from "../components/search_bar/SearchBar";
import axios from "axios";
import CardsContainer from "../components/cards_container/CardsContainer";

export default function Home() {
  const [address, setAddress] = useState("elanhalpern.eth"); // wallet address
  const [data, setData] = useState([]);

  // function to update wallet address
  const handleAddressChange = (value) => {
    setAddress(value);
  };

  // Alchemy URL NFTs API endpoint
  const baseURL = `${import.meta.env.VITE_API_URL}`;
  const url = `${baseURL}/getNFTs/?owner=${address}`;

  // Retrieve NFTs data from Alchemy URL NFTs API endpoint
  async function getNFTs() {
    try {
      const response = await axios.get(`${url}`, {
        withCredentials: false,
      });
      // console.log(response.data.ownedNfts);
      setData(response.data.ownedNfts);
      // console.log("This is data", data);
    } catch (err) {
      console.log(err);
    }
  }

  data.forEach((d) => {
    console.log(d.description);
  });

  return (
    <div>
      <PageTitle
        text="Altura Frontend Engineer Technical Test"
        className="pageTitle"
      />
      <SearchBar
        address={address}
        onAddressChange={handleAddressChange}
        getData={getNFTs}
      />
      {/* <ul style={{ backgroundColor: "red" }}>
        {data.map((d) => {
          return <li>{d.description}</li>;
        })}
      </ul> */}
      <CardsContainer></CardsContainer>
    </div>
  );
}
