import { useState } from "react";
import axios from 'axios';
import { TextField } from "@material-ui/core";

const LandingPage = (props) => {
  const [loginPage, setLoginPage] = useState(false);
  const [registerPage, setRegisterPage] = useState(false);
  const [message, setMessage] = useState('');

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCancelClick = () => {
    loginPage ? setLoginPage(false) : setRegisterPage(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('form submitted');
    if (loginPage) {
      try {
        const result = await axios.post('/api/login', { username, password });
        if (result.data.success) {
          console.log(result);
          props.history.push('/private');
        } else {
          setMessage(result.data.message);
        }
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    } else {
      try {
        const result = await axios.post('/api/register', { username, password });
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getUserInfo = async () => {
    try {
      const result = await axios.get('/api/user');
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div className="container max-width-600 text-center">
        <h1 className="">Passport Auth</h1>
        {loginPage || registerPage ? (
          <div className="mt-3">
            <form onSubmit={handleFormSubmit}>
              <h2>{loginPage ? "Login" : "Register"}</h2>
              <div>
                <p>{message}</p>
              </div>
              <div className="mb-3">
                <TextField
                  required
                  fullWidth
                  id="username-input"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
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

              <div>
                <button type="submit" className="btn btn-dark mr-2">
                  {loginPage ? "Login" : "Create Account"}
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-dark mr-2"
              onClick={() => setLoginPage(true)}
            >
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

      <div>
        <button onClick={getUserInfo} className="btn btn-dark">Get User Info</button>
      </div>
    </div>
  );
};

export default LandingPage;