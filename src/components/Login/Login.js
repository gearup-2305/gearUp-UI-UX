import './Login.css'

function LoginForm() {

  return (
    <div className='login-form-container'>
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
    </form>
    </div>
  )
}

export default LoginForm