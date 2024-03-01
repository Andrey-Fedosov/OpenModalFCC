import React, { useState } from "react";
import "./styles.css";
import { ModalPopup } from "./ModalPopup";

export function ModalStand() {
  const [showModalPopup, setShowModalPopup] = useState<boolean>(false);
  const popupToggler = () => {
    setShowModalPopup(true);
  };

  function closeModal() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div>
      {!showModalPopup ? (
        <button onClick={popupToggler}>Open Modal Popup</button>
      ) : (
        ""
      )}

      {showModalPopup && <ModalPopup id={"1"} closeModal={closeModal} />}
    </div>
  );
}
