import painter from '../../../assets/artist-testimonial.png'
import quote2 from '../../../assets/quote2.png'

const Testimony = () => {
  return (
    <div className='testimonial-container'>
      <div className='description-two-container'>
        <h2 className='description-heading'>Real Life Impact</h2>
        <p className='description'>
          GearUp has proven to be a lifeline for artists, offering a unique
          opportunity to connect with individuals who share a passion for
          creativity and a deep appreciation for the arts. The impact of support
          extends far beyond the financial aspect; it is a source of inspiration
          and affirmation that artists are valued.
        </p>
      </div>
      <div className='testimonial-artist-container'>
        <div className='artist-container'>
          <div className='artist-heading-container'>
            <h2 className='artist-heading'>Creating Art and Community</h2>
          </div>
          <img className='artist-img' src={painter} alt='' />
        </div>
        <div className='quote-container'>
          <img
            src={quote2}
            id='quote'
            alt='Text bubble with quote stating: "This platform connected me with a community of generous donors who believed in my artistic vision and made it a reality. Their contribution not only provided me with the necessary resources but also gave me the confidence and motivation to push my boundaries as an artist." quoted from Rashid Johnson, Painter & Sculptor, Long Island, N.Y. '
          />
        </div>
      </div>
    </div>
  )
}

export default Testimony
