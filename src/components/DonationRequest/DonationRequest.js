import './DonationRequest.css'
import hero from '../../assets/hero.png'


const DonationRequest = () => {

  return (
<>
        <div className='hero-container'>
            <div className='description-container'>
                <h2 className='heading'>Start Gearing Up</h2>
                <p className='description'>Get What You Need For Your Art. Connect with a thriving community of donors eager to fund your art projects.</p>
            </div>
            <div className='image-container'>
                <img className='hero-img' src={hero} alt=''/>
            </div>
        </div>
        <div className='request-form-container'>
            <h2>Tell Us About Your Project</h2>
            <form className="request-form">
                <div className='project-details'>
                    <div className='project-details-one-container'>
                        <label className='project-form-label'  htmlFor='Project Title'>Project Title:</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Project Title"
                            name="Project title"
                        />
                        <label className='project-form-label'  htmlFor='Project Description'>Project Description:</label>
                        <input
                            className="form-input"
                            type="text"
                            placeholder="Project Description"
                            name="Project Description"
                        />
                    </div>
                    <div className='project-details-two-container'>  
                        <label className='project-form-label'  htmlFor='Project Image'>Project Image:</label>
                            <input
                                className="form-input"
                                type="url"
                                placeholder="Project Image"
                                name="Project Image"
                            />
                            <label className='project-form-label'  htmlFor='Dollar Amount Requested'>Dollar Amount Requested:</label>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Dollar Amount Requested"
                                name="Dollar Amount Requested"
                            />          
                    </div>
                </div>
            <button className='project-submit-button'>Submit Donation Request</button>
            </form>
        </div>
</>
  )
}

export default DonationRequest