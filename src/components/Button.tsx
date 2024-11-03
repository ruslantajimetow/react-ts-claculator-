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

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a: number, b: number, sign: string) => {
        const result = {
          '+': (a: number, b: number) => a + b,
          x: (a: number, b: number) => a * b,
          '/': (a: number, b: number) => a / b,
          '-': (a: number, b: number) => a - b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
      });
    }
  };

  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: '',
    });
  };

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      C: reset,
      '+': signClick,
      '/': signClick,
      x: signClick,
      '-': signClick,
      '=': equalsClick,
      '%': percentClick,
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
