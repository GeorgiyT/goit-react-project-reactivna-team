import React from "react";
import s from "./GreyFon.module.css";
import grass from "../../images/grass-desc-cut.png";

export default function GreyFon() {
  return (
    <div className={s.greyFon}>
      <img src={grass} className={s.grassClass} alt="SomeImage" />
    </div>
  );
}
