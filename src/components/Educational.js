// Component for educational information

import React, { useState } from 'react';
import '../styles/Educational.css';

const Educational = () => {
  const [formFields, setFormFields] = useState([
    {
      school: '',
      major: '',
    }
  ]);

  const handleChange = (e, index) => {
    let data = [...formFields];
    data[index][e.target.id] = e.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
  }

  const addFields = () => {
    let obj = {
      school: '',
      major: ''
    };

    setFormFields([...formFields, obj]);
  }

  const delFields = (index) => {
    let obj = [...formFields];
    obj.splice(index, 1);

    setFormFields(obj);
  }

  return (
    <div className='section'>
      <h2>Educational Info</h2>
        {formFields.map((form, index) => {
          return (
            <div className='form-section' key={index}>
              <form onSubmit={submit} className='education-form'>
                <div>
                  <label htmlFor='school'>School Attended</label>
                  <input
                    type='text'
                    onChange={e => handleChange(e, index)}
                    value={form.school}
                    id='school'
                  />
                </div>
                <div>
                  <label htmlFor='major'>Major (If Applicable)</label>
                  <input
                    type='text'
                    onChange={e => handleChange(e, index)}
                    value={form.major}
                    id='major'
                  />
                </div>
                <div>
                  <label htmlFor='dateStarted'>Date Started</label>
                  <input
                    type='date'
                    id='dateStarted'
                  />
                </div>
                <div>
                  <label htmlFor='dateFinished'>Date Finished</label>
                  <input
                    type='date'
                    id='dateFinished'
                  />
                </div>
              </form>
              <button onClick={() => delFields(index)}>Remove Education</button>
            </div>
          )
        })}
        
        <button onClick={addFields}>Add Education</button>
    </div>
  )
}

export default Educational;