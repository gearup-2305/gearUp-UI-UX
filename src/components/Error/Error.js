import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {


    return (
        <div className='error-container'>
        <p className='error-message' >Oops! Something went wrong, please try again.</p>
        <Link className='center-link' to={'/'}>Retry</Link>
        </div>
    )
}

export default Error