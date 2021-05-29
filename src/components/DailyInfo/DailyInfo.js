import React from "react";
import {
  dayBox,
  mainBox,
  title,
  kcalList,
  productList,
  productItem,
  productBox,
} from "./DailyInfo.module.css";

export default function DailyInfo() {
  return (
    <div className={mainBox}>
      <div className={dayBox}>
        <span className={title}>Сводка за 20.06.2020</span>
        <ul className={kcalList}>
          <li>Осталось</li>
          <li>Употреблено</li>
          <li>Дневная норма</li>
          <li>n% от нормы</li>
        </ul>
      </div>
      <div className={productBox}>
        <span className={title}>Нерекомендуемые продукты</span>
        <ul className={productList}>
          <li className={productItem}>Все бульоны/отвары, </li>
          <li className={productItem}>жирная рыба, </li>
          <li className={productItem}>икра и мясо, </li>
          <li className={productItem}>грибы, </li>
          <li className={productItem}>крупы (пшено, перловая, пшеничная) </li>
        </ul>
      </div>
    </div>
  );
}
