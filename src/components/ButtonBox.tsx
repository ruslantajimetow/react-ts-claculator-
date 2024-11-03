import { ReactNode } from 'react';

interface ButtonBoxProps {
  children: ReactNode;
}

function ButtonBox({ children }: ButtonBoxProps) {
  return <div className="buttonBox">{children}</div>;
}

export default ButtonBox;
