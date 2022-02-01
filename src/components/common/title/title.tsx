import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Title = ({ children, ...props }: Props) => <h1 {...props}>{children}</h1>;

export default Title;
