import React, { useState } from "react";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import Modal from "../../components/Modal/Modal";
import styles from "../../components/Modal/Modal.module.css";


export default function MainPages() {
  const [showModal, setShowModal] = useState(false);
 

  const modalToggle = () => {
    setShowModal((prevState) => !prevState.showModal);
  };

  const modalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <CalorieForm onShowModal={modalToggle}/>
      <div id="overlay" className={showModal ? styles.overlay : styles.notShow}>
           <Modal onModalToggle={modalClose} /></div>
    </>
  );
}
