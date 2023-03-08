import React from "react";
import "./NFTDetails.scss";
import { Link } from "react-router-dom";

export default function NFTDetails({ title, description, url }) {
  return (
    <>
      <div className="nft_details">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={url}>Purchase NFT</Link>
      </div>
    </>
  );
}
