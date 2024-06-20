import "./easteregg.css"
export function startEasterEgg() {
const el = document.createElement('div')
el.innerHTML = ""
el.className = `easter-egg hidden`
document.body.append(el)
return {
    destroy: () => {
        el.remove()
    },
    toggle: () => el.classList.toggle('hidden')
}
}
export function listenForEasterEgg() {
const oneko2 = startEasterEgg()
window.addEventListener('keydown', (k) => {
if((k.ctrlKey || k.metaKey) && k.shiftKey && k.altKey) oneko2.toggle()
})
window.addEventListener('keyup', (k) => {
    if((k.ctrlKey || k.metaKey) && k.shiftKey && k.altKey) oneko2.toggle()
})    
}
// expose to window
// LATER: there is a way to type this im just lazy atm
//@ts-ignore
window.easter_egg = startEasterEgg
