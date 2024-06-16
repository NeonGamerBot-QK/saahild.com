import cssIcon from "../../assets/icons/css.svg"
import htmlIcon from "../../assets/icons/html.svg"
import reactjs from "../../assets/icons/reactjs.svg"
import nodejs from "../../assets/icons/nodejs.svg"
import typescript from "../../assets/icons/typescript.svg"
import javascript from "../../assets/icons/javascript.svg"
const icons:any = {
    "css": cssIcon,
    "html": htmlIcon,
    "reactjs": reactjs,
    "nodejs":    nodejs,
    "typescript": typescript,
    javascript
}
export default function Icon({ icon, className }: { icon: string, className?: string }) {
    return <img  src={icons[icon]} className={"inline-flex hover:scale-125 duration-500 linear " + (className ?? "")} />
}