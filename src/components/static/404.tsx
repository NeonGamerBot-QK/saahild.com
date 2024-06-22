import Icon from './Icons'
import { javascriptReact } from './icons_list'
import './404.css'
import ReactParallaxTilt from 'react-parallax-tilt'
export default function Page404 () {
  return <div className='hero min-h-screen'>
    <div className='hero-content text-center'>
      <div className='max-w-md'>
        <ReactParallaxTilt>
          <Icon icon={javascriptReact} className='w-60 p-2 animate-404' noScale />
        </ReactParallaxTilt>
        <h1 className='text-5xl font-bold text-highlight' >404?</h1>
        <p className='py-6'>Seems you are on the wrong page.</p>
        <div>
          <button className='btn mauve mr-2' style={{ background: 'var(--surface0)'}} onClick={() => {
            window.history.back()
          }}>Go back</button>
          <button className='btn mauve' style={{ background: 'var(--surface0)'}} onClick={() => {
            window.location.hash = '#'
          }}>Go Home</button>
        </div>

      </div>
    </div>
  </div>
}
