import './SingleDonationCard.css';
import { Link } from 'react-router-dom';
import thumbprint from '../../../assets/thumprint.png';

const SingleDonationCard = ({ 
  post,
  id,
  key,
  title,
  details,
  requestedAmount,
  currentAmount,
  name,
  city,
  state,
  profileImage
 }) => {
 
  return (
      <div className='card-container'>
          <div key={key} className='donation-card'>
          <div className='profile-button-container'>
            <div className='profile-container'>
              <img
                className='profile-image-card'
                src={profileImage === 'image.jpg' ? thumbprint : profileImage}
                alt=''
              />
              <div className='personal-details-container'>
                <h3>{name}</h3>
                <p>City: {city}</p>
                <p>State: {state}</p>

            </div>
            <div className="donate-button-container">
              <Link className='donation-offer' to={`/${id}`} state={{post}}>Donate</Link>
            </div>
            </div>
          </div>
          <div className='project-details-card'>
            <div className='single-project-card'>
              <h3>🎨 Project: {title}</h3>
              <p>Details: {details}</p>
              <div className="donation-amounts">
                <p>Requested Amount: ${requestedAmount}</p>
                <p>Amount Raised: ${currentAmount}</p>
              </div>
            </div> 
          </div>
        </div>
      </div> 
    )
  }  

export default SingleDonationCard;