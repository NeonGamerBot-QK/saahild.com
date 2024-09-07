import { mdiBullet } from '@mdi/js'
import Icon from '@mdi/react'
import { useEffect, useState } from 'react'

export default function AboutPage () {
  const [currentGrade, setCurrentGrade] = useState<string>("0th")
  useEffect(() => {
    let year:number = new Date().getFullYear()
    if (year > 2027) {
let result = year - 2027
      switch(result) {
case 0:
  setCurrentGrade(`12th`)
  break;
  default: 
setCurrentGrade(`Collage Student`)
  break;
      }
    } else {
      setCurrentGrade(`${Math.abs((2027 - 2024) - 13)}th`)
    }
  })
  return (
  <div className={'hero min-h-screen md:ml-0 ml-2'}>
    <div className='container'>
      <h1 className='text-3xl font-bold'>
Some info about <span className='text-highlight'>me</span>
      </h1>
      <div>
        <blockquote className='mb-0 blockquote'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am{' '}
            <span className='text-highlight '>Saahil dutta, </span>
            from <span className='text-highlight '> USA </span>
            <br />I am a {currentGrade} grader in KCD.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <Icon path={mdiBullet} className='inline-block'size={1} /> Playing Games
            </li>
            <li className='about-activity'>
              <Icon path={mdiBullet} className='inline-block' size={1} /> Eating different types of food
            </li>
            {/* <li className="about-activity">
              <ImPointRight className="inline-block"/> Traveling
            </li> */}
              <li className="about-activity">
                <Icon path={mdiBullet} className="inline-block" size={1} />{" "}
                Swimming
              </li>
            </ul>

            <blockquote
              className="ml-10 text-xl italic font-semibold text-gray-900 dark:text-white"
              style={{ color: "var(--text)" }}
            >
              <svg
                className="w-8 h-8 mb-4 text-gray-400 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p className="ml-5 duration-700 ease-linear hover:text-fuchsia-600 text-fuchsia-500 first-letter:font-2xl">
                "It has become appallingly obvious that our technology has
                exceeded our humanity."{" "}
              </p>
              <footer
                className="ml-8 blockquote-footer "
                style={{ color: "var(--subtext0)" }}
              >
                - Albert Einstein
              </footer>
            </blockquote>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
