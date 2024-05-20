import React, { InputHTMLAttributes, FC } from 'react';

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ ...formInputProps }) => {
  return (
    <input {...formInputProps} />
  )
}

export default FormInput;