import React, { useState } from "react";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import Modal from "../../components/Modal/Modal";



export default function MainPages() {
  const [showModal, setShowModal] = useState(false);
 

  const toggleModal = () => {
    setShowModal((prevState) => !prevState.showModal);
  };

  const modalClose = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <CalorieForm openModal={toggleModal}/>
      <Modal onModalToggle={modalClose} showModal={showModal}/>
    </div>
  );
}
