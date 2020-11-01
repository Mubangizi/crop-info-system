import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CropPage from "./components/CropPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/crops" component={CropPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
