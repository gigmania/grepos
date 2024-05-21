import React, { useState, FormEvent, ChangeEvent } from 'react';
import FormInput from "../form-input/form-input.component.tsx";
import Button from '../button/button.component.tsx'
import { useDispatch } from 'react-redux';
import { getRepos } from '../../store/repos/repos.reducer.ts';
import { HeaderContainer, FormContainer } from './header.styles.jsx'


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
      dispatch(getRepos({owner}));
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
    <HeaderContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="search"
          placeholder="Enter Github Username"
          onChange={handleChange}
          name='owner'
          value={owner}/>
        <Button type="submit"> Get Repos </Button>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header;
