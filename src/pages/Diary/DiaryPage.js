import React from "react";
import DiaryProducts from "../../components/Diary/DiaryProducts";
import DailyInfo from "../../components/DailyInfo/DailyInfo";
import { DiaryPageBox } from "./DiaryPage.module.css";

export default function DiaryPage() {
  return (
    <div className={DiaryPageBox}>
      <DiaryProducts />
      <DailyInfo />
    </div>
  );
}
