let interId:any = null
function hashEvent() {
window.location.reload() // ;-;
}
export function startEvent() {
    if ("onhashchange" in window) {
        window.addEventListener('hashchange', hashEvent)
   }
   else {
    //@ts-ignore
       var prevHash = window.location.hash;
       //@ts-ignore
    interId = window.setInterval(function () {
          if (window.location.hash != prevHash) {
         hashEvent()
          }
       }, 100);
   }

}

export function stopEvent() {
    if(interId) clearInterval(interId)
        window.removeEventListener('hashchange', hashEvent)
}
