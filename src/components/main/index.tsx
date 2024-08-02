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

            <h1 className='text-5xl font-bold'><span className={'wave'}>👋🏾 </span> Hi im <span className='text-highlight'>Saahil</span></h1>
            <p>Welcome to my site.</p>
            <Typewriter />
          </div>
        </div>
      </div>
    </div>
  )
}
