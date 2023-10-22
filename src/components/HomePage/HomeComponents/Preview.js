import './Preview.css'
import { useQuery } from '@apollo/client'
import { LOAD_ALL_POSTS } from '../../../GraphQL/Queries'
import { Link } from 'react-router-dom'

const Preview = () => {
    const { loading, error, data } = useQuery(LOAD_ALL_POSTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    const mostRecentPosts = data.posts.slice(0, 3)


    return (
        <>
        <h2 className='description-heading preview-heading'>Checkout some recent donation requests:</h2>
        <div className='preview-container'>
        <div className='preview-container-cards'>
        {mostRecentPosts.map(post => (
          <div key={post.id} className='donation-card center'>
            <h2>Title: {post.title}</h2>
            <p>Details: {post.details}</p>
            <p>Requested Amount: ${post.requestedAmount}</p>
            <p>Current Amount: ${post.currentAmount}</p>
            <Link className='donation-offer' to={`/${post.id}`} state={{post}}>Donate</Link>
          </div>
        ))}
        </div>
        <Link className='explore-more-button' to={`/community-board`}>Explore more opportunities to support!</Link>
        </div>
        </>
    )
}

export default Preview