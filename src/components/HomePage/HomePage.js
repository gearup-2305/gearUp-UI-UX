import './HomePage.css'
import Together from '../../together.png'

const HomePage = () => {
    return (
        <div className='home-container'>
            <div className='image-container'>
                <img className='together-img' src={Together} alt=''/>
            </div>
            <div className='description-container'>
                <h2 className='heading'>Help Artists Create Art</h2>
                <p className='description'>GearUp connects a widespread community of donors with thriving artists who are eager to bring their artistic vision to life.</p>
                <div className='login-container'>
                    <h2 className='heading'>Art you an artist?</h2>
                    <button className='description'>Login to get support.</button>
                </div>
            </div>
        </div>
      )
}

export default HomePage