import { HashRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Products } from "./features/Products";
import { Product } from "./features/Product";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route>
          <Redirect to="/products" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
