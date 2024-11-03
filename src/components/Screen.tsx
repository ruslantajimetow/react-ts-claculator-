import { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';
import { Textfit } from 'react-textfit';

function Screen() {
  const context = useContext(CalcContext);
  if (!context) {
    return 'Context should not be undefined';
  }

  const { calc } = context;
  return (
    <Textfit className="screen" max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
}

export default Screen;
