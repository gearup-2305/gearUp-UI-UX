import './CommunityBoard.css'
import { useQuery } from '@apollo/client'
import { LOAD_ALL_POSTS } from '../../GraphQL/Queries'
import { useState, useEffect } from 'react'
import AllDonationCards from './AllDonationCards/AllDonationCards'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import FilterForm from './FilterForm/FilterForm'

const CommunityBoard = () => {
  const { loading, error, data, refetch } = useQuery(LOAD_ALL_POSTS)
  const [allPosts, setAllPosts] = useState([])
  const [noDonationsCheck, setNoDonationsCheck] = useState(false)
  const [firstProjectsCheck, setFirstProjectsCheck] = useState(false)
  const [stateCheck, setStateCheck] = useState(false)
  const [stateValue, setStateValue] = useState('')
  const [filterResults, setFilterResults] = useState([])

  useEffect(() => {
    refetch()
    if (error) {
      console.error('Error fetching data:', error)
      return <p>Error: {error.message}</p>
    }
    if (!loading && data) {
      const posts = data.posts

      setAllPosts(posts)
    }
  }, [loading, error, data, refetch])

  if (loading) return <Loading />

  if (error) {
    console.error('Error fetching data:', error)
    return <Error error={error} />
  }

  return (
    <div className='community-board'>
      <FilterForm
        allPosts={allPosts}
        setFilterResults={setFilterResults}
        setNoDonationsCheck={setNoDonationsCheck}
        setFirstProjectsCheck={setFirstProjectsCheck}
        noDonationsCheck={noDonationsCheck}
        firstProjectsCheck={firstProjectsCheck}
        setStateCheck={setStateCheck}
        stateCheck={stateCheck}
        setStateValue={setStateValue}
      />
      <div className='all-donation-requests-container'>
        <div className='community-board-heading-container'>
          <h2>Find a Project to Support</h2>
        </div>
        {
      (filterResults.length === 0 && noDonationsCheck) ||
      (filterResults.length === 0 && firstProjectsCheck) ||
      (filterResults.length === 0 && stateCheck)
      ?
      (
        <div className='none-found'>
          No projects found. Please clear filters.
        </div>
      ) : (
          <>
            {filterResults.length > 0 ? (
              <AllDonationCards filterResults={filterResults} stateCheck={stateCheck} stateValue={stateValue} setStateValue={setStateValue}/>
            ) : (
              <AllDonationCards allPosts={allPosts} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CommunityBoard;