import './FilterForm.css'
import { useState } from 'react'

const FilterForm = ({ setNoDonations, setFirstProjects }) => {
  const [noDonationsForm, setNoDonationsForm] = useState(false)
  const [firstProjectsForm, setFirstProjectsForm] = useState(false)

  const submitFilter = e => {
    e.preventDefault()

    setNoDonations(noDonationsForm)
    setFirstProjects(firstProjectsForm)
  }

  const clearFilter = e => {
    e.preventDefault()
    setNoDonationsForm(false)  
    setFirstProjectsForm(false)
    setNoDonations(false) 
    setFirstProjects(false)
  }

  return (
    <div className='form-section'>
      <form>
      <h2 className='form-heading'>Maximize Your Impact</h2>
        <div className='no-donations-section'>
          <div className='input-label-wrapper'>
            <div className='input-wrapper'>
              <input
                type='checkbox'
                id='no-donations'
                name='noDonations'
                checked={noDonationsForm} 
                onChange={event => setNoDonationsForm(event.target.checked)}
              />
            </div>
            <div className='label-wrapper'>
              <label htmlFor='no-donations'>Artist with No Donations</label>
            </div>
          </div>
        </div>
        <div className='first-donations-section'>
          <div className='input-label-wrapper'>
            <div className='input-wrapper'>
              <input
                type='checkbox'
                id='first-projects'
                name='firstProjects'
                checked={firstProjectsForm} // Use checked prop for controlled checkbox
                onChange={event => setFirstProjectsForm(event.target.checked)} // Update form state
              />
            </div>
            <div className='label-wrapper'>
              <label htmlFor='first-donations'>Artist's First Project</label>
            </div>
          </div>
        </div>
        <button className='button' onClick={event => submitFilter(event)}>
          Submit
        </button>
      </form>
      <button className='button' onClick={event => clearFilter(event)}>
        Clear Filters
      </button>
    </div>
  )
}

export default FilterForm



// import './FilterForm.css'
// import { useState } from 'react'

// const FilterForm = ({ setNoDonations, setFirstProjects }) => {
//   const [noDonationsForm, setNoDonationsForm] = useState(false)
//   const [firstProjectsForm, setFirstProjectsForm] = useState(false)

//   const submitFilter = e => {
//     e.preventDefault()

//     if (noDonationsForm) {
//       setNoDonations(true)
//     }

//     if (firstProjectsForm) {
//       setFirstProjects(true)
//     }
//   }

//   const clearFilter = e => {
//     e.preventDefault()
//     setNoDonations(false)
//     setFirstProjects(false)
//   }

//   return (
//     <div className='form-section'>
//       <form>
//       <h2 className='form-heading'>Maximize Your Impact</h2>
//         <div className='no-donations-section'>
//           <div className='input-label-wrapper'>
//             <div className='input-wrapper'>
//               <input
//                 type='checkbox'
//                 id='no-donations'
//                 name='noDonations'
//                 value={noDonationsForm}
//                 onChange={event => setNoDonationsForm(event.target.value)}
//               />
//             </div>
//             <div className='label-wrapper'>
//               <label htmlFor='no-donations'>Artist with No Donations</label>
//             </div>
//           </div>
//         </div>
//         <div className='first-donations-section'>
//           <div className='input-label-wrapper'>
//             <div className='input-wrapper'>
//               <input
//                 type='checkbox'
//                 id='first-projects'
//                 name='firstProjects'
//                 value={firstProjectsForm}
//                 onChange={event => setFirstProjectsForm(event.target.value)}
//               />
//             </div>
//             <div className='label-wrapper'>
//               <label htmlFor='first-donations'>Artist's First Project</label>
//             </div>
//           </div>
//         </div>
//         <button className='button' onClick={event => submitFilter(event)}>
//           Submit
//         </button>
//       </form>
//       <button className='button' onClick={event => clearFilter(event)}>
//         Clear Filters
//       </button>
//     </div>
//   )
// }

// export default FilterForm
