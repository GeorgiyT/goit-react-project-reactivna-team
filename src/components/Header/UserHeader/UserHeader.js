import React, { useState } from "react";
import s from "./UserHeader.module.css";
import logo from "../../../images/header/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as authOperations from "../../../redux/auth/authOperations";
import { getUserNameSelector } from "../../../redux/user/userSelector";
import Burger from "./Burger/Burger";

const UserHeader = ({ userNic, logOutFunc }) => {
  const [show, setShow] = useState(false);
  const onToggle = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="" />
          <span>Slim</span>
          <span className={s.logo__color}>Mom</span>
        </a>
        <ul className={s.navigations}>
          <li>
            <span></span>
            <NavLink
              activeClassName={s.active}
              className={s.default}
              to="/daily-rate"
            >
              ДНЕВНИК
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={s.active}
              className={s.default}
              to="/calculator"
            >
              КАЛЬКУЛЯТОР
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={s.menu}>
        <p>{userNic}</p>
        <span></span>
        <button onClick={logOutFunc}>Выйти</button>
      </div>
      <Burger show={show} onToggle={onToggle} />
      <button onClick={onToggle} className={show ? s.burger__cross : s.burger}>
        <span className={s.bar1}></span>
        <span className={s.bar2}></span>
        <span className={s.bar3}></span>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userNic: getUserNameSelector(state),
});
const mapDispatchToProps = {
  logOutFunc: authOperations.logOutOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
