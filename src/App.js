import { Suspense } from "react";
import { Route, Switch } from "react-router";
import routes from "./routes";

function App() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Switch>
          {routes.map(route => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
