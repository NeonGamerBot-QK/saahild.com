import './avatar.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Tilt from 'react-parallax-tilt'
// import 'animate.css/animate.css'
export default function Main() {
    return (
        <div className='hero min-h-screen ' >
    <div style={{ animation: "fadeInDown", animationDuration: "1.5s", zIndex: 9999 }} className='animate__animated animate__fadeIn' >
      <div className='hero-content flex-col lg:flex-row max-w-xl' style={{ zIndex: 9999 }}>
        <div className='avatar'>
          <Tilt glareEnable glareColor={'#f9e2af'}>
            <img src={'favicon.png'} />
          </Tilt>
        </div>

        <div style={{ zIndex: 9999 }}>

          <h1 className='text-5xl font-bold zeon-word' >Saahild.com</h1>
          <p>WIP.</p>
        </div>
      </div>
    </div>
  </div>
    )
}