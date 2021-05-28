import { lazy } from "react";
import DiaryProducts from "./components/Diary/DiaryProducts";

const routes = [
  {
    path: "/",
    exact: true,
    restricted: false,
    private: false,
    component: lazy(() => import("./pages/HomePage/HomePage")),
    title: "HOME"
  },
  {
    path: "/login",
    exact: true,
    restricted: false,
    private: false,
    component: lazy(() => import("./pages/HomePage/HomePage")),
    title: "LOGIN"
  },
  {
    path: "/register",
    exact: true,
    restricted: false,
    private: false,
    component: lazy(() => import("./pages/HomePage/HomePage")),
    title: "REGISTRATION"
  },
  {
    path: '/daily-rate',
    label: 'Diary',
    exact: true,
    component: lazy(() => import("./components/Diary/DiaryProducts")),
    private: true,
    restricted: false,
    
  }
];

export default routes;
