import React from 'react'
import Main from './components/main'
import Navbar from './components/navbar'
import InfogramBelowMain from './components/infobelowmain'
// import logo from './logo.svg';
// import './App.css';

function App () {
  return (
    <div style={{ zIndex: 9999 }}>
      <Main />
      <InfogramBelowMain />
      <br />
    </div>
  )
}

export default App
