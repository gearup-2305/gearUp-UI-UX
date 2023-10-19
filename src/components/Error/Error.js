import './Error.css'

const Error = ({error}) => {

    return (
        <p className='error-message' >Error: {error.message}</p>
    )
}

export default Error