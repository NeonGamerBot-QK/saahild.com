import React from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import InfogramBelowMain from "./components/infobelowmain";
import { HashRouter } from "./components/HashRouter";
import Route from "./components/HashRouter/Route";
import AboutPage from "./components/AboutPage";
import SkillSet from "./components/AboutPage/SkillSet";
import GithubStats from "./components/AboutPage/Github";
import Projects from "./components/Projects";
import Page404 from "./components/static/404";
import ContactPage from "./components/ContactPage";
import ReWork from "./components/ReWork";

function App({ analytics }: any) {
  return <ReWork />;
  return (
    <HashRouter>
      <Route
        path={"#/"}
        index
        component={
          <div style={{ zIndex: 9999 }}>
            <Main />
            <InfogramBelowMain />
            <br />
          </div>
        }
      />
      <Route
        path="#/about"
        component={
          <>
            <AboutPage />
            <SkillSet />
            <GithubStats />
          </>
        }
      />
      <Route path="#/projects" component={<Projects />} />
      <Route
        path="#/contact"
        component={<ContactPage analytics={analytics} />}
      />
      <Route path="*" component={<Page404 />} />
    </HashRouter>
  );
}

export default App;
