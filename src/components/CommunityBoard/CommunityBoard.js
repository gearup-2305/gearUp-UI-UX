import './CommunityBoard.css'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { LOAD_ARTISTS } from '../../GraphQL/Queries';
import DonationCard from '../DonationCard/DonationCard'
import Loading from '../Loading/Loading';
import Error from '../Error/Error';


const CommunityBoard = () => {
    const { loading, error, data, refetch } = useQuery(LOAD_ARTISTS);
    const [donations, setDonations] = useState({})

    useEffect(() => {
      refetch()
      if (!loading && data) {
        setDonations(data)
      }
    },[loading, error, data, refetch])

    if (loading) return <Loading/>
    
    if (error) {
      console.error('Error fetching data:', error)
      return <Error error={error}/>
    }

      const allDonationRequests = data && donations?.artists?.map( user => {
        console.log(user)
        return (<DonationCard key={user.id} user={user} />)
      })

      return (
        <div className='all-donation-requests-container'>{allDonationRequests}</div>
        
      )
}

export default CommunityBoard