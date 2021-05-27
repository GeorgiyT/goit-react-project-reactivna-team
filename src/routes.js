import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    restricted: false,
    private: false,
    component: lazy(() => import("./pages/HomePage")),
    title: "HOME"
  }
];

export default routes;
