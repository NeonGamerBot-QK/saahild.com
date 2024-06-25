//@ts-ignore
import * as ackeeTracker from 'ackee-tracker'
const doNotTrack = navigator.doNotTrack == "1" || localStorage.doNotTrack || sessionStorage.doNotTrack || false;
const isDev = process.env.NODE_ENV !== "production"
export enum Actions {
LCP="05296971-2faa-431b-ae01-e7d68e5d6ec4",
CONTACT_FORM="e49da181-1b12-4db4-8296-35ec26a8f1a9"
}
export default class Ackee {
    client: ackeeTracker.AckeeInstance
    domainId: string
constructor({
    server_url, id
}: {
    server_url: string,
    id: string
} = {
    server_url: "https://ackee.saahild.com",
    id: ""
}) {
this.client = ackeeTracker.create(server_url, {
    detailed: doNotTrack ? false : true,
    ignoreLocalhost: !isDev,
    ignoreOwnVisits: false,
})
this.domainId = id
this.init()
}
init() {
    this.client.record(this.domainId)
}
getDeviceInfo() {
    const nav = /** @type {null | (Navigator & { deviceMemory: number, connection: NetworkInformation })} */ (typeof navigator ===
    'undefined'
      ? null
      : navigator)
    // const conn = nav && nav.connection ? nav.connection : null
    return {
      url: window.location ? window.location.href : null,
      referrer: document ? document.referrer : null,
      userAgent: nav ? nav.userAgent : null,
    //   memory: nav ? nav.deviceMemory : undefined,
      cpus: nav ? nav.hardwareConcurrency : undefined,
    //   connection: conn ? { effectiveType: conn.effectiveType, rtt: conn.rtt, downlink: conn.downlink } : undefined,
    }
  }
  
handleWebVitals = () =>(d: any) => {
console.log(d)
let idThing = d.name
// const _this = this
switch(idThing) {
    // case "TTFB":
    //     // console.log(`TTFB: ${entry.responseStart}`, entry.name);

    // break;
    case "LCP":
d.entries.forEach((e: any) =>{
    this.client.action(Actions.LCP, {
        key: e.id || d.id,
        value: e.loadTime + e.renderTime
    })
})
        break;
        default:
        if(isDev)    console.log(`I have NO idea what the rest is!`)
        break;
}
}
contactPage(email: string) {
    return this.client.action(Actions.CONTACT_FORM, {
        key: email,
        value: 1
    })
}
}
