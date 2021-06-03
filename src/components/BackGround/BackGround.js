import React from "react";
import s from "./BackGround.module.css";
import vector from "../../images/vector.png";
import bgImages from "../../images/bg-images.png";

export default function BackGround() {
  return (
    <div className={s.bg__container}>
      <img src={vector} className={s.vector} />
      <img src={bgImages} className={s.bgImages} />
    </div>
  );
}
