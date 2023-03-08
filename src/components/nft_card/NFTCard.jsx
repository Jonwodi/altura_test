import React from "react";
import "./NFTCard.scss";

export default function NFTCard(props) {
  const { img, title } = props;
  return (
    <div className="nft_card">
      <img src={img} className="nft_card__img" />
      <p>Title: {title}</p>
    </div>
  );
}
