import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router";
import BackGround from "./components/BackGround/BackGround";
import Header from "./components/Header/Header";
import { IsLoader } from "./components/Loader/IsLoader";
import { isAuthenticatedSelector } from "./redux/auth/authSelectors";
import { getUserOperation } from "./redux/user/userOperation";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import routes from "./routes/routes";

function App() {
  const isAuth = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && dispatch(getUserOperation());
  }, [isAuth, dispatch]);
  return (
    <Suspense fallback={<IsLoader/>}>
      <Header />
      {!isAuth ? <BackGround /> : ""}
      <Switch>
        {routes.map((route) =>
          route.private ? (
            <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
          ) : (
            <PublicRoute {...route} key={route.path} isAuth={isAuth} />
          )
        )}
      </Switch>
    </Suspense>
  );
}

export default App;
