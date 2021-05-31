import React from "react";
import s from "./LoginHeader.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../images/header/logo.png";

export default function LoginHeader() {
  return (
    <div className={s.header}>
      <a href="/" className={s.logo}>
        <img src={logo} />
        <span className={s.logo__text}>
          Slim<span className={s.logo__text__color}>Mom</span>
        </span>
      </a>
      <div className={s.decoration}></div>
      <ul className={s.navigations}>
        <li className={s.navigations__item}>
          <NavLink activeClassName={s.active} className={s.default} to="/login">
            ВХОД
          </NavLink>
        </li>
        <li className={s.navigations__item}>
          <NavLink
            activeClassName={s.active}
            className={s.default}
            to="/registration"
          >
            РЕГИСТРАЦИЯ
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
