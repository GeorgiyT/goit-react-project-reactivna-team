import { Suspense } from "react";
import { Route, Switch } from "react-router";

import Header from "./components/Header/Header";

import routes from "./routes";
import styles from "./styles/app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Suspense fallback="Loading...">
        <Switch>
          {routes.map(route => (
            <Route {...route} key={route.path} />
          ))}
          {/* <AuthForm /> */}
        </Switch>
      </Suspense>
      <Header/>
    </div>
  );
}

export default App;
