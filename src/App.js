import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <button
        className="temp-trigger-modal-button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal && (
        <React.Fragment>
          <div
            className="temp-modal-backdrop"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="temp-modal">
            <div className="temp-modal-header">
              <span>Title</span>
              <span
                className="temp-modal-header-close-button"
                onClick={() => setShowModal(false)}
              >
                X
              </span>
            </div>
            <div className=""></div>
            <div class="temp-modal-player-container">
              <img
                src={require("./assets/img-1.jpeg")}
                className="temp-modal-player-image"
                alt="temp-player"
              />
            </div>
            <div className="temp-modal-controls">
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-1.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-2.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-3.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-4.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-5.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item temp-active">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-6.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-7.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-8.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-9.jpeg")}
                  alt="control"
                />
              </div>
              <div className="temp-modal-controls-item">
                <img
                  className="temp-modal-controls-item-img"
                  src={require("./assets/control-10.jpeg")}
                  alt="control"
                />
              </div>
            </div>
            <div className="temp-modal-buttons-container">
              <button className="temp-modal-button temp-cancel-button">
                CANCEL
              </button>
              <button className="temp-modal-button temp-ok-button">OK</button>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
