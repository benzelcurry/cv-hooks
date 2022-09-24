// Component for general (personal) information

import React, { useState } from 'react';
import '../styles/General.css';

const General = () => {
  const [formFields, setFormFields] = useState([
    {name: '',
    email: '',
    phone: ''},
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
      name: '',
      email: '',
      phone: ''
    }

    setFormFields([...formFields, obj])
  }

  const delFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);

    setFormFields(data); 
  }

  return (
    <div className='section'>
      {formFields.map((form, index) => {
        return (
          <div className='form-section' key={index}>
            <form onSubmit={submit}>
              <h2>General Info</h2>
              <div>
                <label htmlFor='name'>Full Name</label>
                <input
                  type='text'
                  value={form.name}
                  onChange={e => handleChange(e, index)}
                  id='name'
                />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  value={form.email}
                  onChange={e => handleChange(e, index)}
                  id='email'
                />
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='tel'
                  value={form.phone}
                  onChange={e => handleChange(e, index)}
                  id='phone'
                />
              </div>
            </form>
          </div>
        )
      })}
    </div>
  )
}

export default General;