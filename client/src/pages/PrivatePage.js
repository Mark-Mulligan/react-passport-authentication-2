import axios from 'axios';

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

  return (
    <div className="container">
      <h1>Private Page</h1>
      <button onClick={getUserInfo} className="btn btn-dark mr-2">Get User Data</button>
      <button onClick={handleLogout} className="btn btn-outline-dark">Logout</button>
    </div>
  )
}

export default PrivatePage;