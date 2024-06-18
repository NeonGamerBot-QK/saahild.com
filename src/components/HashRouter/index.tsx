// writing my own hashRouter 

export function HashRouter({ children }: any) {
    console.log(children)
    if(!Array.isArray(children)) children = [children]
    debugger;
  const child = children.find((child:any) => {
console.log('script', child.props, window.location.hash, child.props.route == window.location.hash, (window.location.hash.length < 2 && child.props.index))    
  return  child.props.path == window.location.hash || (window.location.hash.length < 2 && child.props.index)
})
  console.log('child', child)
    if(child) return child.props.component;
  return null;
}
export * from "./Route"