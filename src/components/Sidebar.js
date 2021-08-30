import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from "./concepts/FunctionalComponents/FunctionalComponentDemo";
import JSX from "./concepts/JSX/JSX";
import State from "./concepts/State";
import Effects from "./concepts/Effects";
import PropsDemo from "./concepts/PropsDemo";
import TimePiecesApp from "./apps/timer-apps/TimePiecesApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
            <li>
              <Link to="/functionalcomponent">Functional Component</Link>
            </li>
          </li>
          <li>
            <Link to="/functionalcomponent">Functional Component</Link>
          </li>
          <li>
            <Link to="/jsx">JSX</Link>
          </li>
          <li>
            <Link to="/state">State</Link>
          </li>
          <li>
            <Link to="/effects">Effects</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/timer">Timers</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/functionalcomponent">
            <FunctionalComponentDemo />
          </Route>
          <Route exact path="/jsx">
            <JSX />
          </Route>
          <Route exact path="/state">
            <State />
          </Route>
          <Route exact path="/effects">
            <Effects />
          </Route>
          <Route exact path="/props">
            <PropsDemo />
          </Route>
          <Route exact path="/timer">
            <TimePiecesApp />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
