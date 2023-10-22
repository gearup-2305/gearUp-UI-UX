import './AllDonationCards.css'
import { useQuery } from '@apollo/client'
import { LOAD_ARTISTS } from '../../../GraphQL/Queries'
import { useState, useEffect } from 'react'
import SingleDonationCard from '../SingleDonationCard/SingleDonationCard'
import Loading from '../../Loading/Loading';
import Error from '../../Error/Error'  

const AllDonationCards = ({allPosts, filterResults, stateCheck, stateValue}) => {
  const { loading, error, data, refetch} = useQuery(LOAD_ARTISTS)
  const [allArtists, setAllArtists] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
    
        if (error) {
          console.error('Error fetching data:', error);
          return <p>Error: {error.message}</p>;
        }
    
        if (!loading && data) {
          // console.log(data);
  
          await setAllArtists(data.artists);
          // console.log(allArtists);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [loading, error, data, refetch]);
  
  if (loading) return <Loading/>
  
  if (error) {
    console.error('Error fetching data:', error)
    return <Error error={error}/>
  }

console.log(filterResults)
  const dataToRender = (() => {

    if (stateCheck && filterResults) {
      return filterResults.map((artist) => {
        let posts = artist.posts.map((post) => (
          <SingleDonationCard
            post={post}
            key={post.id}
            id={post.id}
            title={post.title}
            details={post.details}
            requestedAmount={post.requestedAmount}
            currentAmount={post.currentAmount}
            name={artist.name}
            city={artist.city}
            state={artist.state}
            profileImage={artist.profileImage}
          />
        ));
    
        return posts;
      });
    }

    if (filterResults && !stateCheck) {
      return filterResults.map(post => {
        let postsArtist = allArtists?.find(artist => parseInt(artist.id) === post.artistId);
  
        return (
          <SingleDonationCard
            post={post}
            key={post.id}
            id={post.id}
            title={post.title}
            details={post.details}
            requestedAmount={post.requestedAmount}
            currentAmount={post.currentAmount}
            name={postsArtist?.name}
            city={postsArtist?.city}
            state={postsArtist?.state}
            profileImage={postsArtist?.profileImage}
          />
        );
      });
    }
  
    if (!filterResults && allPosts) {
      return allPosts.map(post => {
        let postsArtist = allArtists?.find(artist => parseInt(artist.id) === post.artistId);
  
        return (
          <SingleDonationCard
            post={post}
            key={post.id}
            id={post.id}
            title={post.title}
            details={post.details}
            requestedAmount={post.requestedAmount}
            currentAmount={post.currentAmount}
            name={postsArtist?.name}
            city={postsArtist?.city}
            state={postsArtist?.state}
            profileImage={postsArtist?.profileImage}
          />
        );
      });
    }
  
    return null; // Added a default return in case none of the conditions match
  })();
  
  
  return (
    <div className="all-donations-container">
      {dataToRender}
    </div>
  );
};

export default AllDonationCards;