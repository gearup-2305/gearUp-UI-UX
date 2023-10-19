import './CommunityBoard.css'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { LOAD_ARTISTS } from '../../GraphQL/Queries';
import DonationCard from '../DonationCard/DonationCard'
import Loading from '../Loading/Loading';


const CommunityBoard = () => {
    const { loading, error, data } = useQuery(LOAD_ARTISTS);
    const [donations, setDonations] = useState({})

    useEffect(() => {
      if (!loading && data) {
        setDonations(data)
      }
    },[loading, error, data])

    if (loading) return <Loading/>;
    
    if (error) {
      console.error('Error fetching data:', error);
      return <p>Error: {error.message}</p>;
    }

      const allDonationRequests = data && donations?.artists?.map( user => {
        return (<DonationCard user={user} />)
      })

      return (
        <div className='all-donation-requests-container'>{allDonationRequests}</div>
        
      )
}

export default CommunityBoard