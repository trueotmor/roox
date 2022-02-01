import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const UserCardInner = ({ children, ...props }: Props) => (
  <span {...props}>{children}</span>
);

export default UserCardInner;
