import React from 'react';
import './index.css';
import "animate.css/animate.compat.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './bg/main';
import { injectOneko } from './scripts/oneko';
import Navbar from './components/navbar';
import { runTitle } from './scripts/title';
import { startEvent } from './scripts/hashevent';
import { listenForEasterEgg } from './scripts/oneko_easteregg';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Saahild.com"
injectOneko();
runTitle()
startEvent()
listenForEasterEgg()
document.title = 'React App';
root.render(
  <React.StrictMode>
    <Background />

      <Navbar />
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
