import axios from 'axios';

const PrivatePage = () => {

  const getUserInfo = async () => {
    try {
      const result = await axios.get('/api/user');
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h1>Private Page</h1>
      <button onClick={getUserInfo} className="btn btn-dark mr-2">Get User Data</button>
      <button className="btn btn-outline-dark">Logout</button>
    </div>
  )
}

export default PrivatePage;