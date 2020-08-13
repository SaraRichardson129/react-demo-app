import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";

const Child = ({ match }) => (
  <div>
    <h3>Welcome, {match.params.name}!</h3>
  </div>
);
const NoMatch = ({ location }) => (
  <div>
    <h3>
      Page Not Found 404 <code>{location.pathname}</code>
    </h3>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Welcome name="Sara" />} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Child} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
