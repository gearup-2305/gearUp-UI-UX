import './Filter.css'
import paintPallete from '../../assets/paintPallete.png'

const Filter = ({setNoDonationsSearch, setFirstProjectSearch, noDonationsSearch, firstProjectSearch, setSelectedState, selectedState}) => {
    function handleSearchInput(e) {
        setToFalse()
        if (e.target.id === 'no-donations' && !noDonationsSearch) {
            setNoDonationsSearch(true)
        } else if (e.target.id === 'first-projects' && !firstProjectSearch) {
            setFirstProjectSearch(true)
        } else if (e.target.id === 'state') {
            setSelectedState(e.target.value)
        }
    }

    function setToFalse() {
        setFirstProjectSearch(false)
        setNoDonationsSearch(false)
        setSelectedState('')
    }

    function handleFormClear (e) {
        e.preventDefault()
        setToFalse()
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
                    checked={noDonationsSearch}
                    onChange={event => handleSearchInput(event)} 
                    />
                </div>
                <div className='label-wrapper'>
                    <label htmlFor='no-donations'>Show Requests with No Donations</label>
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
                    checked={firstProjectSearch} 
                    onChange={event => handleSearchInput(event)} 
                    />
                </div>
                <div className='label-wrapper'>
                    <label htmlFor='first-projects'>Artist's First Project</label>
                </div>
                </div>
            </div>
                <div className='state-selector'>
                    <label htmlFor='state'>Filter by State:</label>
                    <select
                    id='state'
                    name='state'
                    value={selectedState}
                    onChange={event => handleSearchInput(event)}
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
                    {/* <p>*</p> */}
                    <button onClick={(e) => {
                        handleFormClear(e)
                    }}>Clear Filters</button>
                </div>
            </form>
            <img className='filter-picture' src={paintPallete} alt='paint brush'></img>
        </div>

    )
}

export default Filter
