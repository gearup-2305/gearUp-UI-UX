import './CommunityBoard.css'
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { LOAD_ARTISTS } from '../../GraphQL/Queries';
import DonationCard from '../DonationCard/DonationCard'
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Filter from '../Filter/Filter';


const CommunityBoard = () => {
    const { loading, error, data, refetch } = useQuery(LOAD_ARTISTS);
    const [donations, setDonations] = useState({})
    const [noDonationsSearch, setNoDonationsSearch] = useState(false)
    const [firstProjectSearch, setFirstProjectSearch] = useState(false)

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

    const artistsWithFilteredPosts = data && donations?.artists?.map(artists => {

      // artists.filter

      let filteredPosts = artists.posts;
      console.log('filteredposts' )
    
      if (noDonationsSearch) {
        const lastPost = filteredPosts[filteredPosts.length - 1]
        console.log('lastpost', lastPost)
        if (lastPost?.currentAmount === 0) (
          filteredPosts = lastPost
          )
          console.log('nodations', filteredPosts)
      }
    
      if (firstProjectSearch) {
        if (filteredPosts.length === 1) {
          return filteredPosts
        }
        console.log('firstproject', filteredPosts)
      }
    
      // Return the artist with the filtered posts
      return {
        ...artists,
        posts: filteredPosts,
      };
    });

    console.log(artistsWithFilteredPosts)

    // const artistsWithFilteredPosts = data && donations?.artists?.map(artists => ({
    //   ...artists,
    //   posts: artists.posts.filter(post => post.requestedAmount > post.currentAmount)
    // }))

      const allDonationRequests = artistsWithFilteredPosts?.map( user => {
        return (<DonationCard key={user.id} user={user} />)
      })

      return (
        <div className='community-board-container'>
        <Filter setNoDonationsSearch={setNoDonationsSearch} setFirstProjectSearch={setFirstProjectSearch} noDonationsSearch={noDonationsSearch} firstProjectSearch={firstProjectSearch}/>
        <div className='all-donation-requests-container'>{allDonationRequests}</div>
        </div>
      )
}

export default CommunityBoard