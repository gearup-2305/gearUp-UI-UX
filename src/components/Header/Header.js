import './Header.css'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <header className='header'>
      <div className='title-wrapper'>
        <div className='title-container'>
          <h1>GearUp</h1>
        </div>
      </div>
      <div className='nav-wrapper'>
        <NavLink to={`/`} className='nav-link'>Home</NavLink>
        <NavLink to={`/donation-request`} className='nav-link'>Request a Donation</NavLink>
        <NavLink to={'/community-board'} className='nav-link'>Community Board</NavLink>
        <NavLink to={'/profile'} className='nav-link'>Profile</NavLink>
        {/* <p className='nav-link'>Profile</p> */}

      </div>
    </header>
  )
}

export default Header


