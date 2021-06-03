import React, { Component, createRef } from "react";
import styles from "../Modal/Modal.module.css";
import sprite from "../../images/symbol-defs.svg";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

class Modal extends Component {
  ref = createRef();
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showModal !== this.props.showModal) {
      if (this.ref.current) {
        if (this.props.showModal) {
          disableBodyScroll(this.ref.current);
        } else {
          enableBodyScroll(this.ref.current);
        }
      }
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
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
          <div className={styles.modal} ref={this.ref}>
            <button type="button" onClick={onModalToggle} className={styles.closeBtn}>
              <span className={styles.goBackSvg}>
                <svg width="20" height="20">
                  <use href={sprite + "#icon-arrow"} />
                </svg>
              </span>
              <span className={styles.closeSvg}>
                <svg width="12" height="12">
                  <use href={sprite + "#icon-close"} />
                </svg>
              </span>
            </button>

            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
