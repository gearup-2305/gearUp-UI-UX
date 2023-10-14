import './DonationRequest.css'
import hero from '../../assets/hero.png'
import { useEffect, useState } from 'react'


const DonationRequest = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [amountRequested, setAmountRequested] = useState(0)
    // const [isFormValid, setIsFormValid] = useState(false)


// Setting up functionality to check if form is valid

    // useEffect(() => {
    //     if (!title, !description, !amountRequested) {
    //         setIsFormValid(true)
    //     } else {
    //         setIsFormValid(false)
    //     }
    // }, [title, description, amountRequested])


// Clear form inputs

    // function clearInput () {
    //     setTitle('')
    //     setAmountRequested(0)
    //     setDescription('')
    //     setImage('')
    // }

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
                            className="request-form-input"
                            type="text"
                            placeholder="Enter Project Title"
                            name="Project Title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                        <label className='project-form-label'  htmlFor='Project Description'>Project Description:</label>
                        <input
                            className="request-form-input"
                            type="text"
                            placeholder="Enter Project Description"
                            name="Project Description"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />
                    </div>
                    <div className='project-details-two-container'>  
                        <label className='project-form-label'  htmlFor='Project Image'>Project Image:</label>
                            <input
                                className="request-form-input"
                                type="url"
                                placeholder="Upload Project Image"
                                name="Project Image"
                                value={image}
                                onChange={(e) => {
                                setImage(e.target.value)
                            }}
                            />
                            <label className='project-form-label'  htmlFor='Dollar Amount Requested'>Dollar Amount Requested:</label>
                            <input
                                className="request-form-input"
                                type="money"
                                placeholder="Dollar Amount Requested"
                                name="Dollar Amount Requested"
                                value={'$' + amountRequested}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const numericValue = inputValue.replace(/[^0-9.]/g, '');
                                    setAmountRequested(numericValue)
                            }}
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