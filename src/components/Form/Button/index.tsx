import { ButtonHTMLAttributes } from 'react';
import { ButtonCustom } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }: ButtonProps) => {
  return <ButtonCustom {...rest}>{title}</ButtonCustom>;
};

export { Button };
