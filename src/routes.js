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
  }
];

export default routes;
