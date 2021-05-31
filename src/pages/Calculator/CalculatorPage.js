import React from "react";
import CalorieForm from "../../components/DailyRate/CalorieForm";
import DailyInfo from "../../components/DailyInfo/DailyInfo";
import { CalculatorPageBox } from "./CalculatorPage.module.css";

export default function CalculatorPage() {
  return (
    <div className={CalculatorPageBox}>
      <CalorieForm />
      <DailyInfo />
    </div>
  );
}
