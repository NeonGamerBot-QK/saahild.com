import Typewriter from 'typewriter-effect'
export default function typewriter () {
  return <Typewriter
    options={{
      strings: ['Developer', 'Gamer', 'Builder'],
      autoStart: true,
      loop: true,
      deleteSpeed: 100,
      wrapperClassName: 'text-highlight',
      cursor: ' |',
      devMode: process.env.NODE_ENV !== 'production'
    }}
    />
}
