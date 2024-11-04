import { HashRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Products } from "./features/Products";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
