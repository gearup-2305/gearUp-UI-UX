import './Login.css'
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'
import { LOAD_ARTISTS } from '../../GraphQL/Queries';

function Login({ setLoggedInUser, loginAccess, setLogOutAccess}) {
  const [password, setPassword] = useState('$2a$12$Qm68zSOdKXCoQ3NeDJBYdOQQ4toyKZbCTHhUs9IOSixebWP89MadC')
  const [allArtists, setAllArtists] = useState([])
  const [singleArtist, setSingleArtist] = useState(null)

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
    <div className={`login-form-container`}>
      {loginAccess ? (
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
          <Link className='login-link' to={`/profile`} onClick={() => {
            setLoggedInUser(singleArtist) 
            setLogOutAccess(true)
            }}>Login.</Link>
        </form>
      ) : (
        <div>
          You are already logged in.
        </div>
      )}
    </div>
  )
}

export default Login;
