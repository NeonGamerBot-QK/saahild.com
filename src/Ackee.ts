import * as ackeeTracker from 'ackee-tracker'
const doNotTrack = navigator.doNotTrack == "1" || localStorage.doNotTrack || sessionStorage.doNotTrack || false;
const isDev = process.env.NODE_ENV !== "production"
export enum Actions {
LCP="05296971-2faa-431b-ae01-e7d68e5d6ec4"
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

}
handleWebVitals(d) {

}
}
