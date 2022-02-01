import { ReactNode, MouseEvent } from 'react';

type Props = {
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  className?: string;
};

const Button = ({ children, ...props }: Props) => (
  <button {...props}>{children}</button>
);

export default Button;
