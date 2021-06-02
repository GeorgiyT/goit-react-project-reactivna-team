import React, { useState } from "react";
import { useSelector } from "react-redux";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import Modal from "../../components/Modal/Modal";
import loader from "../../redux/loader/loaderSelectors";
import { IsLoader } from '../../components/Loader/IsLoader'


export default function MainPages() {
const [showModal, setShowModal] = useState(false);
 const isLoding = useSelector(loader)

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
      {isLoding && <IsLoader/>}
      </div>
     
  );
}
