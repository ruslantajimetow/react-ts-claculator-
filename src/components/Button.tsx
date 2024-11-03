import { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';

export type btnValues = '+' | '-' | '/' | 'x' | '=';
type btnColors = 'green' | 'orange';

interface ButtonProps {
  value: btnValues | string | number;
  key: number;
}

const getClassName = (btn: btnValues) => {
  const className: Record<btnValues, btnColors> = {
    '=': 'green',
    x: 'orange',
    '-': 'orange',
    '+': 'orange',
    '/': 'orange',
  };
  return className[btn];
};

function Button({ value }: ButtonProps) {
  const context = useContext(CalcContext);
  if (!context) {
    return 'Context should not be undefined';
  }

  const { calc, setCalc } = context;

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const reset = () => {
    setCalc({ sign: '', num: 0, res: 0 });
  };

  const handleNums = () => {
    let numberString = value.toString();
    let numberValue;

    if (numberString === '0' && calc.num === 0) {
      numberValue = '0';
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({ ...calc, num: numberValue });
  };

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      C: reset,
    };

    if (results[value]) {
      return results[value]();
    } else {
      return handleNums();
    }
  };
  return (
    <button
      onClick={handleBtnClick}
      className={`${getClassName(value as btnValues)} button`}
    >
      {value}
    </button>
  );
}

export default Button;
