import React from 'react'
import s from"./Header.module.css"
import logo from "../../images/header/logo.png"
import LoginMenu from './loginMenu/LoginMenu'
import UserMenu from './UserMenu/UserMenu'

export default function Header() {
    return (
      <header>
        <div className={s.header}>
          <a href="/" className={s.logo}>
            <img src={logo} alt="" />
            <span className={s.logo__text}>
              Slim<span className={s.logo__text__color}>Mom</span>
            </span>
          </a>
          <div className={s.decoration}></div>
          {false ? <LoginMenu /> : ""}
        </div>
        {true ? <UserMenu /> : ""}
      </header>
    );
}
