let title0: null | string = null
let interId: any = null
export function runTitle() {
    if(interId) clearInterval(interId)
   interId =  setInterval(() => {
        if(document.title !== 'Come Back :(') {
            title0 = document.title
        }
        if (document.hasFocus()) {
          document.title = title0 || "Saahild.com"
        } else {
          document.title = 'Come Back :('
        }
      }, 200)
        
}
export function stopTitle() {
    if(!interId) return false;
    return clearInterval(interId)
}