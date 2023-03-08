import React from "react";
import "./NFTDetails.scss";
import { Link } from "react-router-dom";

export default function NFTDetails({ title, description, url, img }) {
  return (
    <>
      <div className="nft_details">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={img} alt="" />
        <Link to={url} className="nft_details__purchase_link">
          Purchase NFT
        </Link>
      </div>
    </>
  );
}
