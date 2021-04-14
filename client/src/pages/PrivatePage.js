import axios from 'axios';
import { useEffect } from 'react';

const PrivatePage = (props) => {

  const getUserInfo = async () => {
    try {
      const result = await axios.get('/api/user');
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  const handleLogout = async () => {
    try {
      const result = await axios.get('/api/logout');
      console.log(result);
      props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  const getPrivateData = async () => {
    try {
      const result = await axios.get('/api/private');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios.get('/api/user').then((result) => {
      if (!result.data) {
        props.history.push('/');
      }
    })
  }, [props.userLoggedIn])

  return (
    <div className="container">
      <h1>Private Page</h1>
      <button onClick={getUserInfo} className="btn btn-dark mr-2">Get User Data</button>
      <button onClick={handleLogout} className="btn btn-outline-dark mr-2">Logout</button>
      <button onClick={getPrivateData} className="btn btn-outline-dark">Get Private Data</button>
    </div>
  )
}

export default PrivatePage;