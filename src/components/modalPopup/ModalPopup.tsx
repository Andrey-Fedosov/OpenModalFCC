import React from "react";
import "./styles.css";

export type ModalPopupPropsType = {
  id: string;
  header?: string;
  body?: string;
  footer?: string;
  closeModal: () => void;
};

export function ModalPopup(props: ModalPopupPropsType) {
  function closeModalHandler() {
    props.closeModal();
  }

  return (
    <div id={props.id || "Modal"} className="modal">
      <div className="content">
        <div className="popup-header">
          <span className="close-modal-icon" onClick={closeModalHandler}>
            &times;
          </span>
          <h2>{props.header ? props.header : "header"}</h2>
        </div>
        <div className="popup-body">
          <p>
            {props.body ? (
              props.body
            ) : (
              <p>this is very interesting modal body</p>
            )}
          </p>
        </div>
        <div className="footer">
          {props.footer ? props.footer : <p> this is popup footer</p>}
        </div>
      </div>
    </div>
  );
}
