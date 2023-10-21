import './DonationOffer.css'
import grows from '../../assets/artGrow.png'

import paintPalleteBlack from '../../assets/paint-black.png'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { SUBMIT_DONATION_OFFER } from '../../GraphQL/Mutations'
import { useLocation, useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

const DonationOffer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')    
    const [createDonation] = useMutation(SUBMIT_DONATION_OFFER)
    const { id } = useParams()
    const navigate = useNavigate()
    const [isFormValid, setIsFormValid] = useState(true)
    const location = useLocation()
    const post = location.state?.request

const handleFormSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !amount) {
        setIsFormValid(false)
        return
    } else {
       setIsFormValid(true)
    }
    
    createDonation({
        variables: {
          name: name,
          email: email,
          postId: parseFloat(id),
          amount: parseFloat(amount)
        }
      }).then((response) => {
        console.log('Donation created:', response)
        navigate('/community-board')
      })
      .catch((error) => {
        console.error('Error creating donation:', error)
      });
  };

  return (
    <>
        <div className='donation-offer-hero-container'>
            <div className='offer-donation-description-container'>
                <h2 className='heading'>Your Support Makes an Impact</h2>
                <p className='description'>The most trusted site for artists to get support bringing their vision to life. As an artist-founded organization, we're trusted by artists, donors, and communities across the country.</p>
            </div>
            <div className='hero-image-container'>
                <img className='hero-img' src={paintPalleteBlack} alt=''/>
            </div>
        </div>
        <div className='form-review-container'>
            <div className='request-review-container'>
                <h2>Review the Request:</h2>
                <div className='single-project-review'>
                    <h3>🎨 Project: {post.title}</h3>
                    <p>Details: {post.details}</p>
                    <p>Requested Amount: ${post.requestedAmount}</p>
                    <p>Amount Raised: ${post.currentAmount}</p>
                </div> 
                <div className='image-placeholder'>
                    <img className='hero-img' src={grows} alt=''/>
                </div> 
            </div>
            <div className='offer-form-container'>
                <h2>Make Your Donation:</h2>
                <form className="offer-form" onSubmit={handleFormSubmit}>
                    <label className='offer-form-label'  htmlFor='Name'>Name:</label>
                        <input
                            className="offer-form-input"
                            type="text"
                            placeholder="Name"
                            name="Name"
                            value={name}
                            onChange={(e) => {
                            setName(e.target.value)
                            }}
                        />
                        <label className='offer-form-label'  htmlFor='Email'>Email:</label>
                        <input
                            className="offer-form-input"
                            type="text"
                            placeholder="Email"
                            name="Email"
                            value={email}
                            onChange={(e) => {
                            setEmail(e.target.value)
                            }}
                        />
                        <label className='offer-form-label'  htmlFor='Amount'>Amount:</label>
                        <input
                            className="offer-form-input"
                            type="number"
                            placeholder="Amount"
                            name="Amount"
                            value={amount}
                            onChange={(e) => {
                            setAmount(e.target.value)
                                }}
                        />
                    <button className='offer-submit-button'>Submit Donation</button>
                        {!isFormValid && (
                    <p className='missing-form-input-notif' >*One or more required fields are missing</p>
                        )}
                </form>
            </div>
        </div>
    </>
  )
}

export default DonationOffer

