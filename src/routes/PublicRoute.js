import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ path, exact, component, isAuth, isRestricted }) => {
  const dailyRate = useSelector(state => state.user.userData.dailyRate);
  return isAuth && isRestricted ? (
    dailyRate ? (
      <Redirect to="/daily-rate" />
    ) : (
      <Redirect to="/calculator" />
    )
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
