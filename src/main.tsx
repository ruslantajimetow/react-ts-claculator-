import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import CalcProvider from './context/CalcContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalcProvider>
      <App />
    </CalcProvider>
  </StrictMode>
);
