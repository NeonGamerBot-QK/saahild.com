
import * as Icons from "./icons_list"
const icons:any = {
    // pre set names so they dont break
    CloudFolder: Icons.folder_cloud,
    CloudFolderOpen: Icons.folder_cloud_open,
    ...Icons
}
export default function Icon({ icon, inject, className,width,height,noScale }: { icon: string, className?: string,width?:number,height?:number, inject?:boolean, noScale?:boolean }) {
    return inject ? <svg xmlns="http://www.w3.org/2000/svg" fill="var(--mauve)" className={"inline-flex hover:scale-125 duration-500 linear " + (className ?? "")}> <path d={icon}></path></svg>: <img  src={icons[icon] ? icons[icon] : icon} className={`inline-flex ${!noScale ? "hover:scale-125" : ""} duration-500 linear ` + (className ?? "")} width={width} height={height} />
}