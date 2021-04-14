import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivatePage from "./pages/PrivatePage";


import "./App.css";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
            />
          )}
        />
        <Route
          exact
          path="/private"
          render={(props) => (
            <PrivatePage
              {...props}
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
