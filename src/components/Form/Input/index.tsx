import { InputHTMLAttributes } from 'react';

import { InputCustom } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  subtitle?: string;
}

const Input: React.FC<InputProps> = ({ subtitle, ...rest }: InputProps) => {
  return (
    <>
      <InputCustom {...rest} />
      {subtitle && <p> {subtitle} </p>}
    </>
  );
};

export { Input };
