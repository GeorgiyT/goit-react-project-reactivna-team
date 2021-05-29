import React from 'react'
import s from"./LoginMenu.module.css"
import { NavLink } from 'react-router-dom'


export default function LoginMenu() {
    return (
        <ul className={s.navigations}>
        <li className={s.navigations__item}><NavLink activeClassName="" className="" to="/login">ВХОД</NavLink></li>
        <li className={s.navigations__item}><NavLink activeClassName="" className="" to="/register">РЕГИСТРАЦИЯ</NavLink></li>
        </ul>
    )
}
