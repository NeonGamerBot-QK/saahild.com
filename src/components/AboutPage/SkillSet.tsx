import { json } from "stream/consumers";
import Icon from "../static/Icons";
import MIcon from "@mdi/react";
import {
  bash,
  bun,
  coffeescript,
  cpp,
  csharp,
  docker,
  graphql,
  html,
  javascriptReact,
  next,
  npm,
  prisma,
  puppeteer,
  python,
  sass,
  tailwind,
  yarn,
  ejs,
  pnpm,
  vscode,
  git,
  figma,
  robots,
  vercel,
  visualStudio,
} from "../static/icons_list";
import "./skillset.css";
// import { SiKalilinux, SiPostman } from "react-icons/si";
import { mdiArch, mdiConsole, mdiLinux, mdiUbuntu } from "@mdi/js";
export function SkillSet() {
  return (
    <div className="items-center text-center place-items-center">
      <h1 className="project-heading">
        Professional <strong className="texthighlight">Skillset </strong>
      </h1>
      <div className="flex inline-flex grid ">
        <div
          style={{}}
          className="flex-1 max-w-5xl text-center min-w-sm ms-auto me-auto"
        >
          <div className="inline-flex">
            <a
              href="https://www.w3schools.com/w3css/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon="css" className="w-40" width={2000} height={2000} />
            </a>
            <a
              href="https://www.w3schools.com/js/DEFAULT.asp"
              className={"tech-icons inline-flex"}
            >
              <Icon icon="javascript" className="w-40" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon="typescript" className="w-40" />
            </a>
            <a href="https://nextjs.org/" className={"tech-icons inline-flex"}>
              <Icon icon={next} className="w-40" />
            </a>
            <a
              href="https://www.npmjs.com/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={npm} className="w-40" />
            </a>
            <a
              href="https://www.prisma.io/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={prisma} className="w-40" />
            </a>
            <a href="https://pptr.dev/" className={"tech-icons inline-flex"}>
              <Icon icon={puppeteer} className="w-40" />
            </a>
          </div>
          <div className="inline-flex">
            <a
              href="https://sass-lang.com/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={sass} className="w-40" />
            </a>
            <a
              href="https://tailwindcss.com/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={tailwind} className="w-40" />
            </a>
            <div className={"tech-icons inline-flex"}>
              <Icon icon={bash} className="w-40" />
            </div>
            <a href="https://bun.sh/" className={"tech-icons inline-flex"}>
              <Icon icon={bun} className="w-40" />
            </a>
            <a
              href="https://cplusplus.com/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={cpp} className="w-40" />
            </a>
            <a
              href="https://www.docker.com/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={docker} className="w-40" />
            </a>
            <a href="https://graphql.org/" className={"tech-icons inline-flex"}>
              <Icon icon={graphql} className="w-40" />
            </a>
          </div>
          <div className="inline-flex">
            <a
              href="https://www.w3schools.com/html/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={html} className="w-40" />
            </a>
            <a href="https://react.dev/" className={"tech-icons inline-flex"}>
              <Icon icon={javascriptReact} className="w-40" />
            </a>
            <a
              href="https://www.python.org/"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={python} className="w-40" />
            </a>
            <a
              href="https://dotnet.microsoft.com/en-us/languages/csharp"
              className={"tech-icons inline-flex"}
            >
              <Icon icon={csharp} className="w-40" />
            </a>
            {/* for the sake of css coffeescript is out! */}
            {/* <div className={"tech-icons inline-flex"}><Icon icon={coffeescript} className='w-40' /></div> */}
            <a href="https://yarnpkg.com/" className={"tech-icons inline-flex"}>
              <Icon icon={yarn} className="w-40" />
            </a>
            <a href="https://ejs.co/" className={"tech-icons inline-flex"}>
              <Icon icon={ejs} className="w-40" />
            </a>
            <a href="https://pnpm.io/" className={"tech-icons inline-flex"}>
              <Icon icon={pnpm} className="w-40" />
            </a>
          </div>
          {/*

   */}
        </div>
        {/* <br />
  <div style={{  justifyContent: 'center', textAlign: 'center', alignItems: "center", marginLeft: '50px', paddingBottom: '50px' }} className='inline-flex'>
  <div className={"tech-icons inline-flex"}><Icon icon={tailwind} className='w-40' /></div>
  </div> */}
      </div>
    </div>
  );
}
export function TechStack() {
  return (
    <div className="items-center text-center place-items-center">
      <h1 className="project-heading">
        <strong className="text-highlight">Tools</strong> I use
      </h1>
      <div className="flex inline-flex grid">
        <div
          style={{}}
          className="content-center flex-1 max-w-5xl ms-auto me-auto min-w-sm"
        >
          <div className="inline-flex max-w-5xl min-w-sm">
            <div className={"tech-icons inline-flex"}>
              <Icon icon={vscode} className="w-40" width={2000} height={2000} />
            </div>
            <div className={"tech-icons inline-flex"}>
              <Icon icon={git} className="w-40" width={2000} height={2000} />
            </div>
            <div className={"tech-icons inline-flex"}>
              <Icon icon={docker} className="w-40" width={2000} height={2000} />
            </div>
            <div className={"tech-icons inline-flex"}>
              <Icon icon={figma} className="w-40" width={2000} height={2000} />
            </div>
            <div className={"tech-icons inline-flex"}>
              <Icon icon={robots} className="w-40" width={2000} height={2000} />
            </div>
            <div className={"tech-icons inline-flex"}>
              <Icon icon={vercel} className="w-40" width={2000} height={2000} />
            </div>
            <div className={"tech-icons inline-flex"}>
              <Icon
                icon={visualStudio}
                className="w-40"
                width={2000}
                height={2000}
              />
            </div>
            {/* <div className={"tech-icons inline-flex"}><Icon icon=' className='w-40' /></div> */}
          </div>
          <br />
          <div className="inline-flex">
            {/* <div className={"tech-icons inline-flex"}><Icon icon={figma} className='w-40' width={2000} height={2000}/></div> */}
            <div
              className={"tech-icons inline-flex mauve"}
              style={{ color: "var(--mauve)" }}
            >
              <MIcon
                path={mdiLinux}
                size={2}
                className="m-0 md:m-5 lg:w-full"
              />
            </div>
            <div
              className={"tech-icons inline-flex mauve"}
              style={{ color: "var(--mauve)" }}
            >
              <MIcon
                path={mdiConsole}
                size={2}
                className="m-0 md:m-5 lg:w-full"
              />
            </div>
            <div
              className={"tech-icons inline-flex mauve"}
              style={{ color: "var(--mauve)" }}
            >
              <MIcon
                path={mdiUbuntu}
                size={2}
                className="m-0 md:m-5 lg:w-full"
              />
            </div>
            <div
              className={"tech-icons inline-flex mauve"}
              style={{ color: "var(--mauve)" }}
            >
              <MIcon path={mdiArch} size={2} className="m-0 md:m-5 lg:w-full" />
            </div>
            <div
              className={"tech-icons inline-flex mauve"}
              style={{ color: "var(--mauve)" }}
            >
              {/*               <SiPostman /> */}
            </div>
            <div
              className={"tech-icons inline-flex mauve"}
              style={{ color: "var(--mauve)" }}
            >
              {" "}
              {/*               <SiKalilinux /> */}
            </div>
            {/* <div className={"tech-icons inline-flex mauve"} style={{ color: "var(--mauve)"}}><MIcon path={mdiKaliLinux} size={2} className='w-full m-5' /></div> */}
          </div>
          {/* <div className='inline-flex'>
  <div className={"tech-icons inline-flex"}><Icon icon={html} className='w-40' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={javascriptReact} className='w-40' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={python} className='w-40' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={csharp} className='w-40' /></div> */}
          {/* for the sake of css coffeescript is out! */}
          {/* <div className={"tech-icons inline-flex"}><Icon icon={coffeescript} className='w-40' /></div> */}
          {/* <div className={"tech-icons inline-flex"}><Icon icon={yarn} className='w-40' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={ejs} className='w-40' /></div>
  <div className={"tech-icons inline-flex"}><Icon icon={pnpm} className='w-40' /></div>
  </div> */}
          {/*

   */}
        </div>
        {/* <br />
  <div style={{  justifyContent: 'center', textAlign: 'center', alignItems: "center", marginLeft: '50px', paddingBottom: '50px' }} className='inline-flex'>
  <div className={"tech-icons inline-flex"}><Icon icon={tailwind} className='w-40' /></div>
  </div> */}
      </div>
    </div>
  );
}
export default function () {
  return (
    <div className="-mt-20">
      <SkillSet />
      <TechStack />
    </div>
  );
}
