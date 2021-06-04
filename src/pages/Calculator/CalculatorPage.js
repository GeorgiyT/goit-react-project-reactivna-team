import React from "react";

import DailyInfo from "../../components/DailyInfo/DailyInfo";
import CalorieForm from "../../components/DailyRateForm/CalorieForm";
import { CalculatorPageBox } from "./CalculatorPage.module.css";

export default function CalculatorPage() {
  return (
    <div className={CalculatorPageBox}>
      <CalorieForm />
      <DailyInfo />
    </div>
  );
}
