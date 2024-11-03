import './App.css';
import Button, { btnValues } from './components/Button';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';

function App() {
  const btnValues: (btnValues | string | number)[][] = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];
  return (
    <>
      <Wrapper>
        <Screen />
        <ButtonBox>
          <>
            {btnValues.flat().map((btn, i) => {
              return <Button value={btn} key={i} />;
            })}
          </>
        </ButtonBox>
      </Wrapper>
    </>
  );
}

export default App;
