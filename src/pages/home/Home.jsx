import React, { useEffect, useState } from "react";
import PageTitle from "../../components/page_title/PageTitle";
import SearchBar from "../../components/search_bar/SearchBar";
import axios from "axios";
import CardsContainer from "../../components/cards_container/CardsContainer";
import NFTCard from "../../components/nft_card/NFTCard";
import "./Home.scss";
import NFTModal from "../../components/nft_modal/NFTModal";
import NFTDetails from "../../components/nft_details/NFTDetails";

export default function Home() {
  const [address, setAddress] = useState("elanhalpern.eth"); // wallet address
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [more, setMore] = useState({});

  // function to display modal and data specific to a NFT Card
  const handleCardClick = (data) => {
    console.log("Card clicked", data);
    setMore(data);
    setShowModal(true);
  };

  // function to close modal popup
  const handleModalClose = () => {
    setShowModal(false);
  };

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
      setData(response.data.ownedNfts);
      console.log("This is data", data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {showModal && (
        <NFTModal closeModal={handleModalClose}>
          <NFTDetails
            title={more.name}
            description={more.description}
            url={more.url}
          />
        </NFTModal>
      )}
      <div className="home">
        <PageTitle
          text="Altura Frontend Engineer Technical Test"
          className="pageTitle"
        />
        <SearchBar
          address={address}
          onAddressChange={handleAddressChange}
          getData={getNFTs}
        />
        <CardsContainer>
          {data.map((d, index) => {
            return (
              <NFTCard
                img={d.contractMetadata.openSea.imageUrl}
                name={d.metadata.name || d.title}
                key={index}
                onClick={() => handleCardClick(d.metadata)}
              />
            );
          })}
        </CardsContainer>
      </div>
    </>
  );
}
