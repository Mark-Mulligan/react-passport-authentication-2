import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivatePage from "./pages/PrivatePage";


import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/private"
          render={(props) => (
            <PrivatePage
              {...props}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
