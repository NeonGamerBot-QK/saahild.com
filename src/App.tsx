import React from 'react'
import Main from './components/main'
import Navbar from './components/navbar'
import InfogramBelowMain from './components/infobelowmain'
import { HashRouter } from './components/HashRouter'
import Route from './components/HashRouter/Route'
import AboutPage from './components/AboutPage'
import SkillSet from './components/AboutPage/SkillSet'
import GithubStats from './components/AboutPage/Github'
// import logo from './logo.svg';
// import './App.css';

function App () {
  return (
    <HashRouter>
      <Route path={'#/'} index component={<div style={{ zIndex: 9999 }}>
        <Main />
        <InfogramBelowMain />
        <br />
      </div>} />
      <Route path='#/about' component={<>
        <AboutPage />
        <SkillSet />
        <GithubStats />
        </>} />
    </HashRouter>
  )
}

export default App
