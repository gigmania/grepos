import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton } from './button.styles';
import React from 'react';

export type ButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  ...otherProps
}) => {
  return (
    <BaseButton disabled={isLoading} {...otherProps}>
      { children }
    </BaseButton>
  );
};

export default Button;
