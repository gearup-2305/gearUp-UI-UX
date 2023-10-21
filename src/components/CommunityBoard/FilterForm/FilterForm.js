import './FilterForm.css'
import { useState } from 'react'
import { LOAD_ARTISTS } from '../../../GraphQL/Queries'
import { useQuery } from '@apollo/client'

const FilterForm = ({
  allPosts,
  setFilterResults,
  setNoDonationsCheck,
  setFirstProjectsCheck,
  firstProjectsCheck,
  noDonationsCheck,
  setStateCheck,
  setStateValue,
  stateValue
}) => {
  const { loading, error, data, refetch } = useQuery(LOAD_ARTISTS)
  const [noDonationsForm, setNoDonationsForm] = useState(false)
  const [firstProjectsForm, setFirstProjectsForm] = useState(false)
  const [selectedState, setSelectedState] = useState('') // New piece of state for selected state

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  }
  console.log(selectedState)
  console.log(data)

  const submitFilter = async (e) => {
    e.preventDefault();
   

    if (noDonationsForm) {
      let results = allPosts?.filter((post) => post.currentAmount === 0);
      setFilterResults(results);
      setNoDonationsCheck(true);

    }
  
    if (!loading && data && firstProjectsForm) {
      await setFirstProjectsCheck(firstProjectsForm);

      const artists = data.artists;
      const filtered = artists.filter((artist) => artist.posts.length === 1);
  
      await setFilterResults(filtered);
    }
  
    if (!loading && data && selectedState) {
      await setStateCheck(true);
      const filtered = data.artists.filter((artist) => artist.state == selectedState);

      await setFilterResults(filtered);
    } else {
      console.log('error')
    }
  };
  

  const clearFilter = e => {
    e.preventDefault()
    setNoDonationsCheck(false)
    setFirstProjectsCheck(false)
    setStateCheck(false)
    setNoDonationsForm(false)
    setFirstProjectsForm(false)
    setSelectedState('')
    setFilterResults([])
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
                checked={firstProjectsForm} 
                onChange={event => setFirstProjectsForm(event.target.checked)} 
              />
            </div>
            <div className='label-wrapper'>
              <label htmlFor='first-donations'>Artist's First Project</label>
            </div>
          </div>
        </div>
        <div className='state-selector'>
          <label htmlFor='state'>Select State:</label>
          <select
            id='state'
            name='state'
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value=''>Select a state</option>
            <option value='AL'>AL</option>
            <option value='AK'>AK</option>
            <option value='AZ'>AZ</option>
            <option value='AR'>AR</option>
            <option value='CA'>CA</option>
            <option value='CO'>CO</option>
            <option value='CT'>CT</option>
            <option value='DE'>DE</option>
            <option value='FL'>FL</option>
            <option value='GA'>GA</option>
            <option value='HI'>HI</option>
            <option value='ID'>ID</option>
            <option value='IL'>IL</option>
            <option value='IN'>IN</option>
            <option value='IA'>IA</option>
            <option value='KS'>KS</option>
            <option value='KY'>KY</option>
            <option value='LA'>LA</option>
            <option value='ME'>ME</option>
            <option value='MD'>MD</option>
            <option value='MA'>MA</option>
            <option value='MI'>MI</option>
            <option value='MN'>MN</option>
            <option value='MS'>MS</option>
            <option value='MO'>MO</option>
            <option value='MT'>MT</option>
            <option value='NE'>NE</option>
            <option value='NV'>NV</option>
            <option value='NH'>NH</option>
            <option value='NJ'>NJ</option>
            <option value='NM'>NM</option>
            <option value='NY'>NY</option>
            <option value='NC'>NC</option>
            <option value='ND'>ND</option>
            <option value='OH'>OH</option>
            <option value='OK'>OK</option>
            <option value='OR'>OR</option>
            <option value='PA'>PA</option>
            <option value='RI'>RI</option>
            <option value='SC'>SC</option>
            <option value='SD'>SD</option>
            <option value='TN'>TN</option>
            <option value='TX'>TX</option>
            <option value='UT'>UT</option>
            <option value='VT'>VT</option>
            <option value='VA'>VA</option>
            <option value='WA'>WA</option>
            <option value='WV'>WV</option>
            <option value='WI'>WI</option>
            <option value='WY'>WY</option>
          </select>
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