// writing my own hashRouter 

import { useEffect, useState } from "react"

export function HashRouter({ children }: any) {
  const [hash, setHash] = useState(window.location.hash)
  if(process.env.NODE_ENV !== "production")  console.log(children)
    if(!Array.isArray(children)) children = [children]
  useEffect(() => {
    const ev = () => {
      setHash(window.location.hash)
    }
    window.addEventListener('hashchange', ev)
    return () => window.removeEventListener('hashchange', ev)
  })
    // debugger;
  const child = children.find((child:any) => {
if(process.env.NODE_ENV !== "production") console.log('script', child.props, window.location.hash, child.props.route == hash, (hash.length < 2 && child.props.index))    
  return  child.props.path == hash || (hash.length < 2 && child.props.index) || child.props.path == "*"
})
 // console.log('child', child)
    if(child) return child.props.component;
  return null;
}
export * from "./Route"