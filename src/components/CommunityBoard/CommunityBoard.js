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
    const [selectedState, setSelectedState] = useState('') 

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

    const artistsWithFilteredPosts = data && donations?.artists
    // eslint-disable-next-line
    ?.filter(artist => {
      if (!selectedState) {
        return artist
      } else if (selectedState === artist.state)
        return artist
    })
    .map(artist => {

      let filteredPosts = artist.posts;
      if (noDonationsSearch) {
        filteredPosts = artist.posts.filter(post => post.currentAmount === 0)
      }

      if (firstProjectSearch) {
        filteredPosts = artist.posts.filter((post, index) => index === 0 && post.currentAmount < post.requestedAmount)
      }

      return {
        ...artist,
        posts: filteredPosts,
      }
    })

    const allPostsWithArtistInfo = artistsWithFilteredPosts?.reduce((accumulator, artist) => {
      const postsWithArtistInfo = artist?.posts?.map(post => ({
          ...post,
          artistProfileImage: artist.profileImage,
          artistName: artist.name,
          artistCity: artist.city,
        }))
        return accumulator.concat(postsWithArtistInfo)
    }, [])

    const allDonationRequests = allPostsWithArtistInfo?.map( post => {
        return (<DonationCard key={post.id} post={post} />)
    }).reverse()


      return (
        <div className='community-board-container'>
        <Filter setNoDonationsSearch={setNoDonationsSearch} setFirstProjectSearch={setFirstProjectSearch} noDonationsSearch={noDonationsSearch} firstProjectSearch={firstProjectSearch} selectedState={selectedState} setSelectedState={setSelectedState}/>
        <div className='all-donation-requests-container'>{allDonationRequests}</div>
        </div>
      )
}

export default CommunityBoard