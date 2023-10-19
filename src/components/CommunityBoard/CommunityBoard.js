import './CommunityBoard.css'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { LOAD_ARTISTS } from '../../GraphQL/Queries';
// import Projects from '../Projects/Projects'
import DonationCard from '../DonationCard/DonationCard'


const CommunityBoard = () => {
    const { loading, error, data } = useQuery(LOAD_ARTISTS);
    const [donations, setDonations] = useState({})
    
    useEffect(() => {
        if (error) {
          console.error('Error fetching data:', error);
          return <p>Error: {error.message}</p>;
        }
        if (!loading && data) {
          const artists = data;
          console.log(data)
          setDonations(artists);
        }
      }, [loading, error, data]);

      const allDonationRequests = data && donations?.artists?.map( user => {
        return (<DonationCard user={user} />)
      })

      return (
        <div className='all-donation-requests-container'>{allDonationRequests}</div>
      )
}

export default CommunityBoard