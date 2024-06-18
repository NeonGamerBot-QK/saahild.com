import { useEffect, useRef } from 'react'
import './style.css'

export default function Background () {
  const domRef = useRef(null)

  useEffect(() => {
    const inter = setInterval(() => {
      if (document.hasFocus() && domRef.current) {
  // @ts-expect-error
        domRef.current.style.filter = 'blur(10px)'
      } else {
  // @ts-ignore
        domRef.current.style.filter = ''
      }
    })

    return () => {
      clearInterval(inter)
    }
  }, [])

  return (
    <div style={{ filter: 'blur(10px)' }} ref={domRef}>
      <ul className='background'>
        {new Array(49).join('.').split('.').map((_, i) => {
          return <li key={i} className={i % 2 === 0 ? 'bg-effect' : ''} />
        })}
      </ul>
    </div>
  )
}
