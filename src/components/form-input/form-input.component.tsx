import React, { InputHTMLAttributes, FC } from 'react';
import { Input } from './form-input.styles'

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ ...formInputProps }) => {
  return (
    <Input {...formInputProps} />
  )
}

export default FormInput;