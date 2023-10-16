import './Profile.css'
import { useQuery } from '@apollo/client';
import { LOAD_SINGLE_USER } from '../../GraphQL/Queries';
import { useState, useEffect } from 'react';

const Profile = () => {
    const { loading, error, data } = useQuery(LOAD_SINGLE_USER, {
        variables: { id: 1 },
      });
      const [user, setUser] = useState({})

      useEffect(() => {
        if (error) {
          console.error('Error fetching data:', error);
          return <p>Error: {error.message}</p>;
        }
        if (!loading && data) {
          const artist = data;
          console.log(data.artists)
          setUser(artist);
        }
        console.log(data)
      }, [loading, error, data]);

      return (
        <p>heyyy</p>
      )
}

export default Profile