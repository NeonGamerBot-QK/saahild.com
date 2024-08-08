import './avatar.css'
import avatar from '../../assets/avatar.png'
import ScrollAnimation from 'react-animate-on-scroll'
import Tilt from 'react-parallax-tilt'
import Typewriter from './type'
import { useEffect, useRef } from 'react'
export default function Main () {
  const mainEl = useRef(null)

  return (
    <div className={'hero min-h-screen'} ref={mainEl}>
      <div style={{ animation: 'fadeInDown', animationDuration: '1.5s', zIndex: 5 }} className={'animate__animated animate__fadeIn'} >
        <div className='hero-content flex-col lg:flex-row max-w-xl' style={{ zIndex: 5 }}>
          <div className='avatar'>
            <Tilt glareEnable glareColor={'#f9e2af'}>
              <img src={avatar} />
            </Tilt>
          </div>

          <div style={{ zIndex: 9999 }}>

            <h1 className='text-5xl font-bold'><span className={'wave'}><svg className="h-9 w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 inline-block align-bottom mauve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M98,64.31a20,20,0,0,1,34.64-20l28,48.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M71.35,98.17l-16-27.71A20,20,0,0,1,90,50.46l34,58.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M156,164.77a40,40,0,0,1,14.64-54.64l-10-17.32a20,20,0,0,1,34.64-20l18,31.18A80,80,0,0,1,74.7,184l-38-65.82a20,20,0,0,1,34.65-20l22,38.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M192,32a52.12,52.12,0,0,1,32,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M74.62,232c-11-8.69-19.39-19.48-26.62-32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></span> Hi im <span className='text-highlight'>Saahil</span></h1>
            <p>Welcome to my site.</p>
            <Typewriter />
          </div>
        </div>
      </div>
    </div>
  )
}
