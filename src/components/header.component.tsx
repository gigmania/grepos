import React, { useState, FormEvent, ChangeEvent } from 'react';
import FormInput from "./form-input.tsx";
import { useDispatch } from 'react-redux';
import { getRepos } from '../store/repos/repos.reducer.ts'

const defaultFormFields = {
  owner: '',
};


const Header = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { owner } = formFields;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(getRepos(owner));
      console.log(`Repo Owner ${owner}`)
      resetFormFields();
    } catch (error) {
      console.log('failed to get repos', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="search"
          placeholder="Enter Repo"
          onChange={handleChange}
          name='owner'
          value={owner}/>
      </form>
    </header>
  )
}

export default Header;
