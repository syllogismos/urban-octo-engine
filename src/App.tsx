
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ProductPage from './Components/ProductPage';



function About() {
  return <h2>About</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
