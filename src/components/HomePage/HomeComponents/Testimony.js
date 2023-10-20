import './Testimony.css'
import painter from '../../../assets/artist-testimonial.png';

const Testimony = () => {

    return (
        <div className='testimonial-container'>
      <div className='description-two-container'>
        <h2 className='description-heading'>Real Life Impact</h2>
        <p className='description'>GearUp has proven to be a lifeline for artists, offering a unique opportunity to connect with individuals who share a passion for creativity and a deep appreciation for the arts. The impact of support extends far beyond the financial aspect; it is a source of inspiration and affirmation that artists are valued.</p>
      </div>
      <div className='testimonial-artist-container'>
        <div className='artist-container'>
          <h2 className='artist-heading'>Creating Art and Community</h2>

          <img className='artist-img' src={painter} alt=''/>
         </div>
        <div className='quote-container'>
            <div className='quote-artist-text'>
          <p className='quote'>"This platform connected me with a community of generous donors who believed in my artistic vision and made it a reality. Their contribution not only provided me with the necessary resources but also gave me the confidence and motivation to push my boundaries as an artist."</p>
          <p id='artist-name'>
            Rashid Johnson <br/>
            Painter & Sculptor<br/>
            Long Island, N.Y.</p>
            </div>
        </div>     
      </div>    
    </div>
    )
}

export default Testimony