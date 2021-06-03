import React from "react";
import s from "../UserHeader.module.css";
import { NavLink } from "react-router-dom";

const Burger = ({ show, onToggle }) => {
  if (!show) {
    return null;
  }
  return (
    <ul className={s.burger__list}>
      <li>
        <span></span>
        <NavLink
          onClick={onToggle}
          activeClassName={s.activeB}
          className={s.defaultB}
          to="/daily-rate"
        >
          ДНЕВНИК
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={onToggle}
          activeClassName={s.activeB}
          className={s.defaultB}
          to="/calculator"
        >
          КАЛЬКУЛЯТОР
        </NavLink>
      </li>
    </ul>
  );
};

export default Burger;
