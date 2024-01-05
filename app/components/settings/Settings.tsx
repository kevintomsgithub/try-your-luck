"use client";

import Button from "../buttons/Button";
import React, { useState } from "react";
import Modal from "../modal/Modal";

export default function Settings() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex justify-center px-5 md:w-[60rem] rounded-lg">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-center text-xl mb-4">How to play?</h1>
        <ul className="list-disc pl-6">
          <li className="mb-2">Step 1: Select a square to bid.</li>
          <li className="mb-2">
            Step 2: Select the amount to bid on the square.
          </li>
          <li className="mb-2">
            Step 3: Click on the Bid button to bid your amount.
          </li>
        </ul>
      </Modal>
      <Button text="Instructions" onClick={openModal} />
      <Button
        text="Start Game"
        onClick={() => {
          console.log("Start Game");
        }}
      />
      {/* <Button
        text="Restart"
        onClick={() => {
          console.log("Restart");
        }}
      /> */}
      {/* <Button
        text="Draws"
        onClick={() => {
          console.log("Restart");
        }}
      /> */}
    </div>
  );
}
