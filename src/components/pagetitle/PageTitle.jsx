import React from "react";
import "./PageTitle.scss";

export default function PageTitle(props) {
  const { text, className } = props; // properties for PageTitle component
  return <h1 className={className}>{text}</h1>;
}
