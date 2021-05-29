import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    restricted: false,
    private: false,
    component: lazy(() => import("./pages/mainPages/MainPages")),
    title: "HOME"
  },
  {
    path: "/login",
    exact: true,
    restricted: true,
    private: false,
    component: lazy(() => import("./pages/AuthPage/AuthPage" /*webpackChankName:'AuthPage'*/)),
    title: "LOGIN"
  },
  {
    path: "/registration",
    exact: true,
    restricted: true,
    private: false,
    component: lazy(() => import("./pages/AuthPage/AuthPage" /*webpackChankName:'AuthPage'*/)),
    title: "REGISTRATION"
  },
  {
    path: "/daily-rate",
    label: "Diary",
    exact: true,
    component: lazy(() => import("./pages/Diary/DiaryPage")),
    private: true,
    restricted: false
  },
  {
    path: "/calculator",
    label: "Calculator",
    exact: true,
    component: lazy(() => import("./pages/Calculator/CalculatorPage")),
    private: true,
    restricted: false
  }
];

export default routes;
