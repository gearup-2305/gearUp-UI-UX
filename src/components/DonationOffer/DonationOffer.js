import './DonationOffer.css'
// import hero from '../../assets/hero.png'
import grows from '../../assets/artGrow.png'

import paintPalleteBlack from '../../assets/paint-black.png'
import { useMutation } from '@apollo/client';
import { useState } from 'react'
import { CREATE_DONATION } from '../../GraphQL/Mutations';

const DonationOffer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')    
    const [createDonation] = useMutation(CREATE_DONATION)

//  const handleFormSubmit = (e) => {
//         e.preventDefault();
    
//         onCreateDonation({
//             input: {
//                 name: name,
//                 email: email,
//                 postId: 4,
//                 amount: parseFloat(amount)
//             }
//         }).then((response) => {
//             console.log('Donation created:', response);
//         }).catch((error) => {
//             console.error('Error creating donation:', error);
//         });
//     }

//   const onCreateDonation = async (input) => {
//     try {
//       const data = await createDonation({ variables: { input } });
//       console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
//   };

const handleFormSubmit = (e) => {
    e.preventDefault();
  
    onCreateDonation({
      input: {
        name: name,
        email: email,
        postId: 4,
        amount: parseFloat(amount)
      }
    })
      .then((response) => {
        console.log('Donation created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating donation:', error);
      });
  };

const onCreateDonation = async (input) => {
    try {
      const { data } = await createDonation({ variables: { input } });
      console.log(data);
      return data; 
    } catch (error) {
      console.error('Error creating donation:', error);
      throw error; 
    }
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
                    <h3>🎨 Project: Title</h3>
                    <p>Details: Details</p>
                    <p>Requested Amount: $$$</p>
                    <p>Amount Raised: $$$</p>
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
                </form>
            </div>
        </div>
    </>
  )
}

export default DonationOffer


 //     }).then((response) => {
    //         console.log('Donation created:', response);
    //         console.log(data)
    //     }).catch((error) => {
    //         console.error('Error creating donation:', error);
    //     });
    // }



    // keeping in email - if guest user makes a donation and their email matches a user profile, the next time they sign in it will be displayed on their profile

    // const [isFormValid, setIsFormValid] = useState(false)

    // useEffect(() => {
    //     if (!title, !description, !amount) {
    //         setIsFormValid(true)
    //     } else {
    //         setIsFormValid(false)
    //     }
    // }, [name, email, amount])


// Clear form inputs
    // function clearInput () {
    //     setName('')
    //     setEmail(0)
    //     setAmount('')
    // }

    

