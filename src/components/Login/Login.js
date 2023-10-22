import './Login.css'
import { Link } from 'react-router-dom'

function Login({ setLoginAccess, loginAccess, setProfileAccess}) {

  return (
    <div className={`login-form-container`}>
      {!loginAccess ? (
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
            value={'FakePassword?'}
          />
          <Link className='login-button' to={`/profile`} onClick={() => {
            setLoginAccess(true) 
            setProfileAccess(true)
            }}
            >Login</Link>
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
