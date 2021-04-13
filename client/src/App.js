import { useState } from "react";
import { TextField } from "@material-ui/core";

const App = () => {
  const [loginPage, setLoginPage] = useState(false);
  const [registerPage, setRegisterPage] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Passport Auth</h1>
        {loginPage || registerPage ? (
          <div>
            <TextField
              required
              fullWidth
              id="username-input"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              required
              fullWidth
              type="password"
              id="password-input"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <button className="btn btn-dark" onClick={() => setLoginPage(true)}>
              Login
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => setRegisterPage(true)}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
