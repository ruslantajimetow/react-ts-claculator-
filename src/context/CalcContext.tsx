import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export const CalcContext = createContext<ProviderValue | undefined>(undefined);

interface CalcProviderProp {
  children: ReactNode;
}

export type Calc = {
  sign: string;
  num: number | string;
  res: number;
};

type ProviderValue = {
  calc: Calc;
  setCalc: Dispatch<SetStateAction<Calc>>;
};

function CalcProvider({ children }: CalcProviderProp) {
  const [calc, setCalc] = useState<Calc>({
    sign: '',
    res: 0,
    num: 0,
  });

  const providerValue: ProviderValue = {
    calc,
    setCalc,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
}

export default CalcProvider;
