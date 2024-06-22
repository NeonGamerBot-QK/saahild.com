import React, { useEffect, useState } from "react"
import "./style.css"
import { LuGitFork, LuGlobe } from "react-icons/lu"
/**
 * 
 * @param param0 
 * @returns 
 */
export function Card({ title, description, image,alt, Badges, svn_link} : {
    title: string ,
    description: string,
    image?: string,
    alt?: string,
    Badges?: any,
    svn_link: string
}) {
    return <div style={{ background: "var(--surface0)"}}className="card md:w-80 shadow-xl">
{image ? 
    <figure><img src={image} alt={alt || "No Alt"} /></figure>: null}
    <div className="card-body">
      <h2 className="card-title text-center text-highlight">
<a href={svn_link}>{title}</a>
        {/* <div className="badge badge-secondary">NEW</div> */}
      </h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
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
                // console.log([...data[0], ...data[1]])
                const idsThatAreFound:any = {}
                const items = [...data[0], ...data[1]].filter(function(item, pos, self) {
                    if(idsThatAreFound[item.id]) return false;
                    idsThatAreFound[item.id] = true
                    return true;
                })
                .filter(e => e.topics.includes('github-include-on-site'))
                console.log(items)
                //@ts-ignore
                    setGithubData(items)
                })
    }
    useEffect (() => {
      fetchData()
    }, [])
    return <>
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row duration-1000 text-center" style={{ transform: `translateY(${translateY}%)`}}>
    {/* <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div>
      <h1 className="text-5xl font-bold text-highlight lg:mt-20">Projects</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}
    <div className="grid flex grid-cols-2 md:gap-6 gap-2 text-center mt-5 duration-1000" style={{ transform: `translateY(${-translateY}%)` }}>
{githubData.map((d: any) => {
return  <Card title={d.name} description={d.description} key={d.id}  svn_link={d.html_url} Badges={<>
<div className="inline-flex">

<a  target="_blank" href={d.html_url + '/fork'} style={{ background: "var(--mantle)", borderRadius: "50%" }} className="btn btn-change rounded-full mauve"><LuGitFork /></a>
{d.homepage ? 
    <a  target="_blank" href={d.homepage} style={{ background: "var(--mantle)", borderRadius: "50%" }} className="btn btn-change rounded-full mauve"><LuGlobe /></a>
: null}
</div>
<div className="md:inline-flex">
{d.topics.filter((e:string) => !e.includes('github-include-on-site')).map((topic:string) => {
    return <div className="badge badge-outline">{topic}</div>
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