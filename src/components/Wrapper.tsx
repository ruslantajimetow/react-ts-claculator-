import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
