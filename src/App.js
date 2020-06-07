import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainTodo from "./components/basicTodo/MainTodo";
import MainReduxTodo from "./components/reduxTodo/MainReduxTodo";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainTodo} />
        <Route exact path="/react-redux" component={MainReduxTodo} />
      </Switch>
    </div>
  );
};

export default App;
