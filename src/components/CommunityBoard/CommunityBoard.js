import './CommunityBoard.css'
import { useQuery } from '@apollo/client'
import { LOAD_ALL_POSTS } from '../../GraphQL/Queries'
import { useState, useEffect } from 'react'
import DonationCard from '../DonationCard/DonationCard'
import Loading from '../Loading/Loading';
import Error from '../Error/Error'
import FilterForm from '../FilterForm/FilterForm'

const CommunityBoard = () => {
  const { loading, error, data, refetch} = useQuery(LOAD_ALL_POSTS)
  const [allPosts, setAllPosts] = useState([])
  const [filters, setFilter] = useState(false)
  const [noDonations, setNoDonations] = useState(false)
  const [firstProjects, setFirstProjects] = useState(false)
  const [noneFound, setNoneFound] = useState(false)

  useEffect(() => {
    refetch()
    if (error) {
      console.error('Error fetching data:', error);
      return <p>Error: {error.message}</p>;
    }
    if (!loading && data) {
      const posts = data.posts
      setAllPosts(posts)
      console.log(allPosts)
    }
  }, [loading, error, data, refetch])

  if (loading) return <Loading/>
  
  if (error) {
    console.error('Error fetching data:', error)
    return <Error error={error}/>
  }

  const filteredNoDonations = noDonations
  ? allPosts?.filter(post => post.currentAmount == 0)
  : allPosts

  const donationRequestsToRender = noDonations && filteredNoDonations.length > 0
    ? (filteredNoDonations?.map(request => (
        <DonationCard key={request.id} request={request} firstProjects={firstProjects} setNoneFound={setNoneFound}/>
      ))
   ) : allPosts?.map( request => {
      return (<DonationCard key={request.id} request={request} firstProjects={firstProjects} setNoneFound={setNoneFound}/>) })
    
  return (
    <div className='community-board'>
      <FilterForm
        noDonations={noDonations}
        setNoDonations={setNoDonations}
        firstProjects={firstProjects}
        setFirstProjects={setFirstProjects}
        setNoneFound={setNoneFound}
      />
      <div className='all-donation-requests-container'>
        <div className='community-board-heading-container'>
          <h2>Find a Project to Support</h2>
        </div>
        {noneFound ? (
        <div className='none-found'>No projects found. Please clear filters.</div>
      ) : (
        donationRequestsToRender
      )}
      </div>
    </div>
  )
}

export default CommunityBoard
