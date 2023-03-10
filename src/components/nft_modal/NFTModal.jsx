import React from "react";
import "./NFTModal.scss";
import "../overlay/Overlay.scss";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function NFTModal({ children, closeModal }) {
  return (
    <div className="overlay" onClick={closeModal}>
      <div className="nft_modal">
        <button onClick={closeModal} className="nft_modal__close_button">
          <XMarkIcon className="nft_modal__xicon" />
        </button>
        {children}
      </div>
    </div>
  );
}
