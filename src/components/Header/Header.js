import './Header.css'
import GearUpLogo from '../../GearUpLogo.png'
// import { Link, NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'


const Header = () => {
  return (
    <header className='header'>
      <div className='logo-title-wrapper'>
        <div className='logo-container'>
        </div>
        <div className='title-container'>
          <img className='gearup-logo' src={GearUpLogo} alt='gearup logo' />
          {/* <h1>GearUp</h1> */}
        </div>
      </div>
      <div className='nav-wrapper'>
        {/* <NavLink to={``} onClick={} className='nav-link'>Home</NavLink> */}
        {/* <NavLink to={``} onClick={} className='nav-link'>Community Board</NavLink> */}
        {/* <NavLink to={``} onClick={} className='nav-link'>Request a Donation</NavLink> */}
        {/* conditionally render profile */}
        {/* <NavLink to={``} onClick={} className='nav-link'>Profile</NavLink> */}
      </div>
    </header>
  )
}

export default Header


