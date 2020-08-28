import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import NoMatch from "./components/noMatch/NoMatch";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Welcome name="Sara" />} />
        <Route
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
