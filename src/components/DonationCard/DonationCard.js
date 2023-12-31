import './DonationCard.css';
import { Link } from 'react-router-dom';
import thumbprint from '../../assets/thumprint.png';

const DonationCard = ({ post }) => {

  const donationCardDisplay = (
    <div key={post.id} className='donation-card'>
      <div className='profile-button-container'>
        <div className='profile-container'>
          <img
            className='profile-image-card'
            src={post.artistProfileImage === 'image.jpg' ? thumbprint : post.artistProfileImage}
            alt=''
          />
          <div className='personal-details-container'>
            <h3>{post.artistName}</h3>
            <p>City: {post.artistCity}</p>
        </div>
        <div className="donate-button-container">
          <Link className='donation-offer' to={`/${post.id}`} state={{post}}>Donate</Link>
        </div>
        </div>
      </div>
      <div className='project-details-card'>
        <div className='single-project-card'>
          <h3>🎨 Project: {post.title}</h3>
          <p>Details: {post.details}</p>
          <div className="donation-amounts">
            <p>Requested Amount: ${post.requestedAmount}</p>
            <p>Amount Raised: ${post.currentAmount}</p>
          </div>
        </div> 
      </div>
    </div>
  );
  
  return <div>{donationCardDisplay}</div>;
  }  

export default DonationCard;
