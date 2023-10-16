import './Login.css'
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_ARTISTS } from '../../GraphQL/Queries';

function LoginForm({loginAccess, setLoginAccess, setLoggedInUser}) {
  const [password, setPassword] = useState('$2a$12$Qm68zSOdKXCoQ3NeDJBYdOQQ4toyKZbCTHhUs9IOSixebWP89MadC')
  const [allArtists, setAllArtists] = useState([])
  const [singleArtist, setSingleArtist] = useState(null); // Initialize singleArtist state

  const { loading, error, data } = useQuery(LOAD_ARTISTS)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          setAllArtists(data.artists);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  useEffect(() => {
    const updatedSingleArtist = allArtists.find((artist) => {
      return artist.passwordDigest === password;
    });
    setSingleArtist(updatedSingleArtist);
  }, [allArtists, password]);

  return (
    <div className={`login-form-container ${loginAccess ? 'active' : ''}`}>
      <form className="login-form">
        <h2>Please Log In:</h2>
        <label className='login-form-label' htmlFor='Username'>Username:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          name="Username"
          value={'userOne1!'}
          readOnly
        />
        <label className='login-form-label' htmlFor='Password'>Password:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Password"
          name="Password"
          defaultValue={password}
        />
        <button className='login-button' onClick={() => {
          setLoginAccess(false)
          setLoggedInUser(singleArtist)
          console.log(singleArtist) }}>Login</button>
        <button className='login-button'>Cancel</button>
      </form>
    </div>
  )
}

export default LoginForm;

