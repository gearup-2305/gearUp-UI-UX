import './FilterForm.css';
import { useState } from 'react';

const FilterForm = ({setNoDonations, setFirstProjects}) => {
    const [noDonationsForm, setNoDonationsForm] = useState(false);
    const [firstProjectsForm, setFirstProjectsForm] = useState(false);


    const submitFilter = (e) => {
        e.preventDefault();
    
        if (noDonationsForm) {
          setNoDonations(true);
        }
    
        if (firstProjectsForm) {
          setFirstProjects(true);
        }
      };

      const clearFilter = (e) => {
        e.preventDefault();
        setNoDonations(false);
        setFirstProjects(false);

    };

  return (
    <div className='form-section'>
        <form>
          <div className='no-donations-section'>
            <h2 className='form-heading'>Maximize Your Impact</h2>
                <input
                type='checkbox'
                id='no-donations'
                name='noDonations'
                value={noDonationsForm}
                onChange={event => setNoDonationsForm(event.target.value)}
                />
                <label htmlFor='no-donations'>Artist with No Donations</label>
          </div>
          <div className='first-donations-section'>
                <input
                type='checkbox'
                id='first-projects'
                name='firstProjects'
                value={firstProjectsForm}
                onChange={event => setFirstProjectsForm(event.target.value)}
                />
                <label htmlFor='first-donations'>Artist's First Project</label>
          </div>
          <button className='button' onClick={event => submitFilter(event)}>Submit</button>
        </form>
        <button className='button' onClick={event => clearFilter(event)}>Clear Filters</button>
    </div>
  );
}

export default FilterForm;