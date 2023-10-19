import './DonationRequest.css'
import hero from '../../assets/hero.png'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { SUBMIT_DONATION_REQUEST } from '../../GraphQL/Mutations'
import { useNavigate } from 'react-router-dom'

const DonationRequest = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [imageUrl, setImageUrl] = useState('www.image.url')
    const [requestedAmount, setRequestedAmount] = useState(0)
    // const [artistID, setArtistID] = useState(4)
    // const [currentAmount, setCurrentAmount] = useState(0)
    const navigate = useNavigate()
  

    const [createDonationRequest] = useMutation(SUBMIT_DONATION_REQUEST)

    const handleFormSubmit = (e) => {
        e.preventDefault();

        createDonationRequest({
            variables: {
                title: title,
                details: details,
                imageUrl: imageUrl,
                requestedAmount: parseFloat(requestedAmount), 
                currentAmount: parseFloat(0),     
                artistID: parseInt(4),
            }
        }).then((response) => {
            console.log('Mutation Response:', response)
            navigate('/community-board')
        })
        .catch((error) => {
            console.error('Mutation Error:', error)
        });
    }


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
                            value={details}
                            onChange={(e) => {
                                setDetails(e.target.value)
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
                                value={imageUrl}
                                onChange={(e) => {
                                setImageUrl(e.target.value)
                            }}
                            />
                            <label className='project-form-label'  htmlFor='Dollar Amount Requested'>Dollar Amount Requested:</label>
                            <input
                                className="request-form-input"
                                type="money"
                                placeholder="Dollar Amount Requested"
                                name="Dollar Amount Requested"
                                value={'$' + requestedAmount}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const numericValue = inputValue.replace(/[^0-9.]/g, '');
                                    setRequestedAmount(numericValue)
                            }}
                            />
                                   
                    </div>
                </div>
            <button className='project-submit-button' onClick={(e) => handleFormSubmit(e)} >Submit Donation Request</button>
            </form>
        </div>
</>
  )
}

export default DonationRequest
