import { Suspense } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";

import routes from "./routes";

function App() {
  return (
    <Suspense fallback="Loading...">
      <Header />
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </Suspense>
  );
}

export default App;
