import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import Router from './components/Router/Router';


const root = document.getElementById("root");

function Main() {
  return (
    <>
      <Router/>
    </>
  );
}

export default Main;

createRoot(root).render(
  <StrictMode>
    <Main/>
  </StrictMode>
    
)