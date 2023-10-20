import './DonationCard.css';
import { Link } from 'react-router-dom';
import thumbprint from '../../assets/thumprint.png';
import { LOAD_ARTISTS } from '../../GraphQL/Queries'
import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading';
import Error from '../Error/Error'

const DonationCard = ({ request }) => {
  const { loading, error, data, refetch} = useQuery(LOAD_ARTISTS)
  const [allArtists, setAllArtists] = useState([])

  useEffect(() => {
    refetch()
    if (error) {
      console.error('Error fetching data:', error);
      return <p>Error: {error.message}</p>;
    }
    if (!loading && data) {
      const artists = data.artists
      setAllArtists(artists)
      console.log(allArtists)
    }
  }, [loading, error, data, refetch])

  if (loading) return <Loading/>
  
  if (error) {
    console.error('Error fetching data:', error)
    return <Error error={error}/>
  }

  const postsArtist = data?.artists.find(artist => {
    console.log(artist.id)
    console.log(request.artistId)
    return parseInt(artist.id) === request.artistId
  
  })
  
  return (
  <div className='card-container'>
       <div key={request.id} className='donation-card'>
      <div className='profile-button-container'>
        <div className='profile-container'>
          <img
            className='profile-image-card'
            src={postsArtist.profileImage === 'image.jpg' ? thumbprint : postsArtist.profileImage}
            alt=''
          />
          <div className='personal-details-container'>
            <h3>{postsArtist.name}</h3>
            <p>City: {postsArtist.city}</p>
        </div>
        <div className="donate-button-container">
          <Link className='donation-offer' to={`/${request.id}`} state={{request}}>Donate</Link>
        </div>
        </div>
      </div>
      <div className='project-details-card'>
        <div className='single-project-card'>
          <h3>🎨 Project: {request.title}</h3>
          <p>Details: {request.details}</p>
          <div className="donation-amounts">
            <p>Requested Amount: ${request.requestedAmount}</p>
            <p>Amount Raised: ${request.currentAmount}</p>
          </div>
        </div> 
      </div>
    </div>
  </div> 
    )
  }  

export default DonationCard;
