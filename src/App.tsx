import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import People from "./components/people.component";
import AddPerson from "./components/add-person.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/people"} className="navbar-brand">
            old life
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/people"} className="nav-link">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-person"} className="nav-link">
                Add person
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/people"]} component={People} />
            <Route exact path="/add-person" component={AddPerson} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
