import React from "react";
import "./NFTCard.scss";

export default function NFTCard(props) {
  const { img, name, price, ...others } = props;
  return (
    <button className="nft_card" {...others}>
      <img src={img} className="nft_card__img" alt="" />
      <p>{name}</p>
      <p>{price}</p>
    </button>
  );
}
