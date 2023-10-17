import React from 'react';
import './Projects.css';

const Projects = ({ loggedInUser }) => {
  const projectsDisplay = loggedInUser.posts.map(post => (
    <div key={post.id} className='single-project'>
      <h3>🎨 Project: {post.title}</h3>
      <p>Details: {post.details}</p>
      <p>Requested Amount: ${post.requestedAmount}</p>
      <p>Amount Raised: ${post.currentAmount}</p>
  </div> 
  ));

  return <div>{projectsDisplay}</div>;
};

export default Projects;
