import React from "react";
import s from "./UserHeader.module.css";
import logo from "../../../images/header/logo.png";
import { NavLink } from "react-router-dom";

export default function UserHeader() {
  const hendleClick = () => {
    console.log("123");
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
        <p>Nic</p>
        <span></span>
        <button onClick={hendleClick}>Выйти</button>
      </div>
      <div className={s.burger}></div>
    </div>
  );
}
