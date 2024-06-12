import "./style.css";
export default function Background() {
  return (
 <div style={{ filter: 'blur(10px)'}}>
    <ul className="background">
  {new Array(49).join('.').split('.').map((_,i) => {
    return  <li key={i} className={i % 2 === 0 ? "bg-effect" : ""}></li>
  })}
</ul> 
 </div>
  )
}