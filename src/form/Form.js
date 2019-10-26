import React from 'react';
import useForm from "./useForm";
import validate from './AddValidation';
import Home from "../home/Home"

const Form = () => {
  
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <header className="header">
            <form onSubmit={handleSubmit} noValidate>
                <label className="label"><h2>Enter asin number here:</h2></label>
                  <input 
                  type="text" name="text" 
                  onChange={handleChange} 
                  // onChange={({ target }) => setNewAsinLabel(target.value)}
                  // value={newAsinLabel}
                  value={values.text || ''} 
                  required />
                  <input type="submit" value="Add"/>
                {errors.text && (
                  <p className="error-message">{errors.text}</p>
                )}
              
            </form>
      </header>
  );
  
};

export default Form;