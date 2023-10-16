import './Profile.css'
// import { useQuery } from '@apollo/client';
// import { LOAD_SINGLE_USER } from '../../GraphQL/Queries';
// import { useState, useEffect } from 'react';
import ProfilePic from '../../assets/user-icon.png'
import Projects from '../Projects/Projects';


const Profile = ({loginAccess, loggedInUser}) => {
  console.log(loggedInUser)
    // const { loading, error, data } = useQuery(LOAD_SINGLE_USER, {
    //     variables: { id: 1 },
    //   });
    //   const [user, setUser] = useState({})

    //   useEffect(() => {
    //     if (error) {
    //       console.error('Error fetching data:', error);
    //       return <p>Error: {error.message}</p>;
    //     }
    //     if (!loading && data) {
    //       const artist = data;
    //       console.log(data.artists)
    //       setUser(artist);
    //     }
    //     console.log(data)
    //   }, [loading, error, data]);

    return Object.values(loggedInUser).length > 0 && (
      <section className='details-container' key={loggedInUser.id}>
        <div className='profile-details-container'>
          <div className='profile-pic-container'>
            <img className='profile-pic' src={ProfilePic} alt='' />
          </div>
          <p>{loggedInUser.city}, {loggedInUser.state}</p>
          <p>{loggedInUser.zipcode}</p>
          <p>Email: {loggedInUser.email}</p>
          <p>Your Preferred Medium: {loggedInUser.medium}</p>
        </div>
        <div className='artist-details'>
          <h2 className='artist-welcome'>Welcome, {loggedInUser.name}!</h2>
          <div className='projects-container'>
            <div className='projects-heading-container'>
              <h2 className='projects-heading'>All Projects:</h2>
            </div>
            <div className='single-project-container'>
              <Projects loggedInUser={loggedInUser} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Profile