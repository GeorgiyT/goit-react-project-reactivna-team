import React, { Component } from "react";
import styles from "../Modal/Modal.module.css";
// import closeModalBtn from '../../assets/images/close-burger-menu.png';
// import goBackBtn from '../../assets/images/go-back.png';
import DailyRateModal from "../DailyRateForm/DailyRateModal";
import sprite from "../../images/symbol-defs.svg";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
    document.getElementById("overlay").addEventListener("click", this.closeOverlay);
  }

  componentWillUnmount() {
    this.removeScroll();
    window.removeEventListener("keydown", this.closeModal);
    document.getElementById("overlay").removeEventListener("click", this.closeModalOverlay);
  }

  closeOverlay = event => {
    if (event.target.className.includes("overlay")) {
      this.props.onModalToggle();
    }
  };

  closeModal = event => {
    this.removeScroll();
    const { onModalToggle } = this.props;
    if (event.code === "Escape") {
      onModalToggle();
    }
  };

  removeScroll = () => {
    document.body.classList.remove("stopScroll");
  };

  render() {
    const { onModalToggle } = this.props;
    return (
      <>
        <div className={styles.modal}>
          <button type="button" onClick={onModalToggle} className={styles.closeModalBtn}>
            <span className={styles.closeModalImg}>
              <svg width="12" height="12">
                <use href={sprite + "#icon-close"} />
              </svg>
            </span>
            <span className={styles.goBackImg}>
              <svg width="18" height="18">
                <use href={sprite + "#icon-arrow"} />
              </svg>
            </span>
          </button>

          <DailyRateModal />
        </div>
      </>
    );
  }
}

export default Modal;
