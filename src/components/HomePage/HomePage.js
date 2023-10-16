import './HomePage.css'
import Together from '../../assets/together.png'


const HomePage = ({setLoginAccess}) => {

    return (
        <div className='home-container'>
            <div className='image-container'>
                <img className='together-img' src={Together} alt=''/>
            </div>
            <div className='description-container'>
                <h2 className='description-heading'>Help Artists Create Art</h2>
                <p className='description'>GearUp connects a widespread community of donors with thriving artists who are eager to bring their artistic vision to life.</p>
                <div className='login-container'>
                    <h2 className='login-home-heading'>Art you an artist?</h2>
                    <button onClick={() => {setLoginAccess(true)}} className='login-link'>Login to Get Support</button>
                    {/* <Link className='login-link' to={`/login-form`}>Login to get support.</Link> */}
                </div>
            </div>
        </div>
      )
}

export default HomePage