import React, { Component } from "react";
import styles from "../Modal/Modal.module.css";
import DailyRateModal from "../DailyRateForm/DailyRateModal";
import sprite from "../../images/symbol-defs.svg";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    this.removeScroll();
    window.removeEventListener("keydown", this.closeModal);
  }

  closeOverlay = event => {
    if (event.target === event.currentTarget) {
      this.props.onModalToggle();
    }
  };

  closeCross = () => {
    this.props.onModalToggle();
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
    const { onModalToggle, showModal } = this.props;
    return (
      <>
        <div id="overlay" className={showModal ? styles.overlay : styles.notShow} onClick={this.closeOverlay}>
          <div className={styles.modal}>
            <button type="button" onClick={onModalToggle} className={styles.closeBtn}>
              <span className={styles.closeSvg}>
                <svg width="12" height="12">
                  <use href={sprite + "#icon-close"} />
                </svg>
              </span>
              <span>
                <svg className={styles.goBackSvg} width="20" height="20">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
              </span>
            </button>

            <DailyRateModal />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
