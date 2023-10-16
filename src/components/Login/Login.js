import './Login.css'


function LoginForm({loginAccess, setLoginAccess}) {

  return (
    // <div className='login-form-container'>
      <div className={`login-form-container ${loginAccess ? 'active' : ''}`}>
    <form className="login-form">
      <h2>Please Log In:</h2>
      <label className='login-form-label'  htmlFor='Username'>Username:</label>
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
        value={'password123'}
        readOnly
      />
      <button className='login-button' >Login</button>
      <button onClick={() => {setLoginAccess(false)}} className='login-button'>Cancel</button>
    </form>
    </div>
  )
}

export default LoginForm