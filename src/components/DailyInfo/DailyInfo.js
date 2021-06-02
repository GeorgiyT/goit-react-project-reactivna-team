import React from "react";
import { useSelector } from "react-redux";
import {
  notProductsSelector,
  calSelector,
  percentsOfDailyRateSelector,
  kcalConsumedSelector,
  kcalLeftSelector,
  dateSelector,
} from "../../redux/dailyInfo/dailyInfoSelector";

import {
  dayBox,
  mainBox,
  title,
  kcalList,
  productList,
  kcalItem,
  productBox,
} from "./DailyInfo.module.css";

export default function DailyInfo() {
  const dailyKcal = useSelector(calSelector);
  const notAllowedProducts = useSelector(notProductsSelector);
  const kcalLeft = useSelector(kcalLeftSelector);
  const kcalConsumed = useSelector(kcalConsumedSelector);
  const percentsOfDailyRate = useSelector(percentsOfDailyRateSelector);
  const date = useSelector(dateSelector);

  return (
    <div className={mainBox}>
      <div className={dayBox}>
        <span className={title}>Сводка за {date}</span>
        <ul className={kcalList}>
          <li className={kcalItem}>
            <span>Осталось</span>
            <span>{kcalLeft} ккал</span>
          </li>
          <li className={kcalItem}>
            <span>Употреблено</span>
            <span>{kcalConsumed} ккал</span>
          </li>
          <li className={kcalItem}>
            <span>Дневная норма</span>
            <span>{dailyKcal} ккал</span>
          </li>
          <li className={kcalItem}>
            <span>n% от нормы</span>
            <span>{Math.round(percentsOfDailyRate)}%</span>
          </li>
        </ul>
      </div>
      <div className={productBox}>
        <span className={title}>Нерекомендуемые продукты</span>
        {/* <ul className={productList}>
          {notAllowedProducts.map((product, id) => (
            <li key={id} className={productItem}>
              {product}
            </li>
          ))}
          </ul> */}
        <p className={productList}> {notAllowedProducts.join(", ")}</p>
      </div>
    </div>
  );
}
