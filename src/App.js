import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Products } from "./features/Products";
import { Product } from "./features/Product";
import { Cart } from "./features/Cart";
import { Category } from "./features/Category";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/category/:categoryName">
          <Category />
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
