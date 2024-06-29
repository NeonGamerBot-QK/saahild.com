import React, { useEffect, useState } from "react"
import "./style.css"
import { LuGitFork, LuGlobe } from "react-icons/lu"
/**
 * 
 * @param param0 
 * @returns 
 */
export function Card({ title, description, image,alt, Badges, svn_link, is_fork} : {
    title: string ,
    description: string,
    image?: string,
    alt?: string,
    Badges?: any,
    svn_link: string,
    is_fork: Boolean
}) {
    return <div style={{ background: "var(--surface0)"}}className="shadow-xl card md:w-80">
{image ? 
    <figure><img src={image} alt={alt || "No Alt"} /></figure>: null}
    <div className="card-body">
      <h2 className="text-center card-title text-highlight">{is_fork ? <LuGitFork /> : null}
<a href={svn_link}>{title}</a>
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p>{description}</p>
      <div className="justify-end card-actions">
        {/* <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div> */}
       {Badges ? Badges : ""}
      </div>
    </div>
  </div>
}
// oh boy i cannot WAIT for myself to add projects in via git
export default function Projects() {
    // most projects should be loaded via github
    // otherwise they will all be concacted with the github.json file
    const [githubData, setGithubData] = useState ([])
const [translateY, setTranslateY] = useState(0)
// if(translateY > -50) {
//     setTimeout(() => {
// setTranslateY(translateY - 10)
//     }, 40)
// }
    const fetchData = () => {
      return Promise.all([fetch(`https://api.github.com/users/NeonGamerBot-QK/repos?per_page=100`)
            .then((response) => response.json()),fetch(`https://api.github.com/users/NeonGamerBot-QK/repos?per_page=100?page=2`)
            .then((response) => response.json())])

            .then((data) => 
                {
                  if(process.env.NODE_ENV !== "production")   console.log(data[0], data[1])
                const idsThatAreFound:any = {}
                const items = [...data[0], ...data[1]]
                .filter(e => e.topics.includes('github-include-on-site'))
                .filter(function(item, pos, self) {
                    if(idsThatAreFound[item.id]) return false;
                    idsThatAreFound[item.id] = true
                    return true;
                })
                
                console.log()
                if(process.env.NODE_ENV !== "production")    console.log(items)
                //@ts-ignore
                    setGithubData(items)
                })
    }
    useEffect (() => {
      fetchData()
    }, [])
    return <>
<div className="min-h-screen hero">
  <div className="flex-col text-center duration-1000 hero-content lg:flex-row" style={{ transform: `translateY(${translateY}%)`}}>
    {/* <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div>
      <h1 className="text-5xl font-bold text-highlight lg:mt-20">Projects</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}
    <div className="flex grid grid-cols-2 gap-2 mt-5 text-center duration-1000 md:gap-6" style={{ transform: `translateY(${-translateY}%)` }}>
{githubData.map((d: any) => {
return  <Card title={d.name} description={d.description} key={d.id}  svn_link={d.html_url} is_fork={d.fork}Badges={<>
<div className="inline-flex">

<a  target="_blank" href={d.html_url + '/fork'} style={{ background: "var(--mantle)", borderRadius: "50%" }} className="rounded-full btn btn-change mauve"><LuGitFork /></a>
{d.homepage ? 
    <a  target="_blank" href={d.homepage} style={{ background: "var(--mantle)", borderRadius: "50%" }} className="rounded-full btn btn-change mauve"><LuGlobe /></a>
: null}
</div>
<div className="hidden grid-cols-3 max-w-60 lg:inline-flex" >
{d.topics.filter((e:string) => !e.includes('github-include-on-site')).map((topic:string,i:number) => {
    return <div className="truncate badge badge-outline" key={i}><span className="truncate">{topic}</span></div>
})}
</div>
</>}/>

})}
    </div>
    </div>
  </div>
</div>
</>
}