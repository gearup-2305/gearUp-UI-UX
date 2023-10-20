import './CommunityBoard.css'
import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { LOAD_ARTISTS } from '../../GraphQL/Queries'
import DonationCard from '../DonationCard/DonationCard'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import FilterForm from '../FilterForm/FilterForm'

const CommunityBoard = () => {
  const { loading, error, data, refetch } = useQuery(LOAD_ARTISTS)
  const [artists, setArtists] = useState([])
  const [filters, setFilter] = useState(false)
  const [noDonations, setNoDonations] = useState(false)
  const [firstProjects, setFirstProjects] = useState(false)

  useEffect(() => {
    refetch()
    if (!loading && data) {
      setArtists(data.artists)
    }
  }, [loading, error, data, refetch])

  if (loading) return <Loading />

  if (error) {
    console.error('Error fetching data:', error)
    return <Error error={error} />
  }

  const filteredNoDonations = noDonations
    ? artists?.filter(user => user?.posts?.some(post => post.currentAmount == 0))
    : artists

  const filteredFirstDonation = firstProjects
    ? artists?.filter(user => user.posts.length === 1)
    : artists

  const donationRequestsToRender = noDonations
    ? filteredNoDonations?.map(user => (
        <DonationCard key={user.id} user={user} />
      ))
    : firstProjects
    ? filteredFirstDonation?.map(user => (
        <DonationCard key={user.id} user={user} />
      ))
    : data && artists.map(user => <DonationCard key={user.id} user={user} />)

  return (
    <div className='community-board'>
      <FilterForm
        noDonations={noDonations}
        setNoDonations={setNoDonations}
        firstProjects={firstProjects}
        setFirstProjects={setFirstProjects}
      />
      <div className='all-donation-requests-container'>
        <div className='community-board-heading-container'>
          <h2>Find a Project to Support</h2>
        </div>
        {donationRequestsToRender}
      </div>
    </div>
  )
}

export default CommunityBoard