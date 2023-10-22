import './ConfirmationPage.css'
import { Link } from 'react-router-dom'

const ConfirmationPage = () => {
  return (
    <div className='confirmation-container'>
      <div className='thank-you'>
        <h2>Thank you for your donation!</h2>
      </div>
        <div className='confirmation-button-container'>
          <Link className="confirmation-button" to={`/community-board`}>Check Out More Projects!</Link>
        </div>
    </div>
  )
}

export default ConfirmationPage
