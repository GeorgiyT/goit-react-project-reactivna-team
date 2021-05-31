import React from 'react'
import s from"./UserMenu.module.css"



export default function UserMenu() {
   const hendleClick=()=>{
    console.log("123")
   }
    return (   
        <div className={s.menu}>
            <p>Nic</p>
            <span></span>
            <a onClick={hendleClick}>Выйти</a>
        </div>
    )
}
