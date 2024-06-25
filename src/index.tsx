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
import Footer from './components/footer';
import Ackee from './Ackee';
const analytics = new Ackee({
  server_url: process.env.REACT_APP_SERVER_URL || "https://ackee.saahild.com", 
  id: `c082bd15-f9d8-414f-aa10-926e1d66a5d6`
})
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
    <App analytics={analytics} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(analytics.handleWebVitals());
