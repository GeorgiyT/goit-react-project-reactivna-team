import { lazy } from "react";

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
  }
];

export default routes;
