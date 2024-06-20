import { json } from 'stream/consumers'
import Icon from '../static/Icons'
import MIcon from '@mdi/react';
import { bash, bun, coffeescript, cpp, csharp, docker, graphql, html, javascriptReact, next, npm, prisma, puppeteer, python, sass, tailwind, yarn, ejs, pnpm, vscode, git, figma, robots, vercel, visualStudio } from '../static/icons_list'
import './skillset.css'
import { SiKalilinux, SiPostman } from 'react-icons/si'
import { mdiArch, mdiConsole, mdiLinux, mdiUbuntu } from '@mdi/js'
export function SkillSet () {
  return<div className='text-center place-items-center items-center'>
  <h1 className='project-heading'>
  Professional <strong className='texthighlight'>Skillset </strong>
  </h1>
 <div className='flex grid inline-flex' >
 <div style={{  }} className='flex-1 content-center ms-auto me-auto'> 
  <div className='inline-flex'>
 <div className={"tech-icons inline-flex"}><Icon icon='css' className='w-20 p-2' width={2000} height={2000}/></div>
  <div className={"tech-icons inline-flex"}><Icon icon='javascript' className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon='typescript' className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={next} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={npm} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={prisma} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={puppeteer} className='w-20 p-2' /></div>
  </div>
  <div className='inline-flex'>
  <div className={"tech-icons inline-flex"}><Icon icon={sass} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={tailwind} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={bash} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={bun} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={cpp} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={docker} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={graphql} className='w-20 p-2' /></div>  
  </div>
  <div className='inline-flex'>
  <div className={"tech-icons inline-flex"}><Icon icon={html} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={javascriptReact} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={python} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={csharp} className='w-20 p-2' /></div>
  {/* for the sake of css coffeescript is out! */}
  {/* <div className={"tech-icons inline-flex"}><Icon icon={coffeescript} className='w-20 p-2' /></div> */}
  <div className={"tech-icons inline-flex"}><Icon icon={yarn} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={ejs} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={pnpm} className='w-20 p-2' /></div>
  </div>
  {/* 
  
   */}
  
  </div>
  {/* <br />
  <div style={{  justifyContent: 'center', textAlign: 'center', alignItems: "center", marginLeft: '50px', paddingBottom: '50px' }} className='inline-flex'> 
  <div className={"tech-icons inline-flex"}><Icon icon={tailwind} className='w-20 p-2' /></div>
  </div> */}
</div>
  </div>
  
}
export function TechStack () {
  return<div className='text-center place-items-center items-center'>
  <h1 className='project-heading'>
  <strong className='text-highlight'>Tools</strong> I use
  </h1>
 <div className='flex grid inline-flex' >
 <div style={{  }} className='flex-1 content-center ms-auto me-auto'> 
  <div className='inline-flex'>
 <div className={"tech-icons inline-flex"}><Icon icon={vscode} className='w-20 p-2' width={2000} height={2000}/></div>
 <div className={"tech-icons inline-flex"}><Icon icon={git} className='w-20 p-2' width={2000} height={2000}/></div>
 <div className={"tech-icons inline-flex"}><Icon icon={docker} className='w-20 p-2' width={2000} height={2000}/></div>
 <div className={"tech-icons inline-flex"}><Icon icon={figma} className='w-20 p-2' width={2000} height={2000}/></div>
 <div className={"tech-icons inline-flex"}><Icon icon={robots} className='w-20 p-2' width={2000} height={2000}/></div>
 <div className={"tech-icons inline-flex"}><Icon icon={vercel} className='w-20 p-2' width={2000} height={2000}/></div>
 <div className={"tech-icons inline-flex"}><Icon icon={visualStudio} className='w-20 p-2' width={2000} height={2000}/></div>
  {/* <div className={"tech-icons inline-flex"}><Icon icon=' className='w-20 p-2' /></div> */}
  </div>
  <br />
  <div className='inline-flex'>
 {/* <div className={"tech-icons inline-flex"}><Icon icon={figma} className='w-20 p-2' width={2000} height={2000}/></div> */}
 <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><MIcon path={mdiLinux} size={2} className='w-full m-5' /></div>
 <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><MIcon path={mdiConsole} size={2} className='w-full m-5' /></div>
 <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><MIcon path={mdiUbuntu} size={2} className='w-full m-5' /></div>
 <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><MIcon path={mdiArch} size={2} className='w-full m-5' /></div>
 <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><SiPostman /></div>
 <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}> <SiKalilinux /></div>
 {/* <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><MIcon path={mdiKaliLinux} size={2} className='w-full m-5' /></div> */}
  
  </div>
  {/* <div className='inline-flex'>
  <div className={"tech-icons inline-flex"}><Icon icon={html} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={javascriptReact} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={python} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={csharp} className='w-20 p-2' /></div> */}
  {/* for the sake of css coffeescript is out! */}
  {/* <div className={"tech-icons inline-flex"}><Icon icon={coffeescript} className='w-20 p-2' /></div> */}
  {/* <div className={"tech-icons inline-flex"}><Icon icon={yarn} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={ejs} className='w-20 p-2' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={pnpm} className='w-20 p-2' /></div>
  </div> */}
  {/* 
  
   */}
  
  </div>
  {/* <br />
  <div style={{  justifyContent: 'center', textAlign: 'center', alignItems: "center", marginLeft: '50px', paddingBottom: '50px' }} className='inline-flex'> 
  <div className={"tech-icons inline-flex"}><Icon icon={tailwind} className='w-20 p-2' /></div>
  </div> */}
</div>
  </div>
  
}
export default function() {
  return <>
  <SkillSet />
  <TechStack /></>
}