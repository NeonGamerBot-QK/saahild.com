import "./nav.css"
import Icon from '@mdi/react';
import CustomIcon from "../static/Icons"
import { mdiAccountCircle, mdiAccountBox } from '@mdi/js';
function NavLinks() {
return <>
<li><a href="#/about"><Icon path={mdiAccountCircle} size={1} color={"var(--mauve)"}/> About</a></li>
        <li><a href="#/projects"><CustomIcon icon={window.location.hash === "#/projects" ? "CloudFolderOpen" : "CloudFolder" }/> Projects</a></li>
<li><a href="#/contact"><Icon path={mdiAccountBox} size={1} color={"var(--mauve)"}/> Contact</a></li>
</>
}
export default function Navbar() {
    return <div className="navbar" style={{ zIndex: 9999, background: "var(--base)", position: "fixed",  }}>
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-links">
       <NavLinks />
      </ul>
      </div>
      <a className="btn btn-ghost text-xl" href="#">saahild.com</a>
    
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 nav-links">
        <NavLinks />
      </ul>
    </div>
    </div>
    <div className="navbar-end">
      {/* <a className="btn">Button</a> */}
    </div>
  </div>
}