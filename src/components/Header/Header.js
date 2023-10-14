import './Header.css'
// import GearUpLogo from '../../GearUpLogo.png'
// import { NavLink } from 'react-router-dom'
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
        <p className='nav-link'>Home</p>
        <p className='nav-link'>Community Board</p>
        <p className='nav-link'>Request a Donation</p>
        <p className='nav-link'>Profile</p>
      </div>
    </header>
  )
}

export default Header


