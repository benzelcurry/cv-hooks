// Component for practical (work history) information

import React, { useState } from 'react';
import '../styles/Practical.css';

const Practical = () => {
  const [formFields, setFormFields] = useState([
    {
      company: '',
      position: '',
      taskOne: '',
      taskTwo: '',
      taskThree: ''
    }
  ])

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
      company: '',
      position: '',
      taskOne: '',
      taskTwo: '',
      taskThree: ''
    }

    setFormFields([...formFields, obj]);
  }

  const delFields = (index) => {
    let obj = [...formFields];
    obj.splice(index, 1);

    setFormFields(obj);
  }

  return (
    <div className='section'>
      <h2>Work History</h2>
        {formFields.map((form, index) => {
          return (
            <div className='form-section' key={index}>
              <form onSubmit={submit}>
                <div className='practical-section'>
                  <div>
                    <label htmlFor='company'>Company Name</label>
                    <input
                      type='text'
                      value={form.company}
                      onChange={e => handleChange(e, index)}
                      id='company'
                    />
                  </div>
                  <div>
                    <label htmlFor='position'>Position</label>
                    <input
                      type='text'
                      value={form.position}
                      onChange={e => handleChange(e, index)}
                      id='position'
                    />
                  </div>
                  <div className='tasks'>
                    <div>Primary Responsibilities</div>
                    <input
                      type='text'
                      value={form.taskOne}
                      onChange={e => handleChange(e, index)}
                      id='taskOne'
                      placeholder='Task 1'
                    />
                    <input
                      type='text'
                      value={form.taskTwo}
                      onChange={e => handleChange(e, index)}
                      id='taskTwo'
                      placeholder='Task 2'
                    />
                    <input
                      type='text'
                      value={form.taskThree}
                      onChange={e => handleChange(e, index)}
                      id='taskThree'
                      placeholder='Task 3'
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlFor='startDate'>Start Date</label>
                      <input
                        type='date'
                        id='startDate'
                      />
                    </div>
                    <div>
                      <label htmlFor='endDate'>End Date</label>
                      <input
                        type='date'
                        id='endDate'
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button onClick={() => delFields(index)}>Delete Work History</button>
            </div>
          )
        })}

        <button onClick={addFields}>Add Work History</button>
    </div>
  )
}

export default Practical;