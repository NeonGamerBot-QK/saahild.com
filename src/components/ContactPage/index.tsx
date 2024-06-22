import { useState } from "react"

const isDev =  process.env.NODE_ENV !== 'production'
export default function ContactPage() {
    const [done, setDone] = useState(false)
    const [error, setError] = useState<string |  null>(null)
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [nameOfPerson, setName] = useState("")
    const onSubmit = (e: any) => {
        if(isDev) {
            // dev mode dosent have php backend so i have to run it do ABSOULTLEY NOTHING!
            // just pretend it works
            console.log(`
            To: ${nameOfPerson} (${email})
            ${message}
            `)
if(Math.random() > .5) {
    setDone(true)
} else {
    setError(`Math.random was NOT higher then .5`)
}
        } else {
            const form = new FormData(e.target)
            fetch('/contact_form.php', {
                body: form
            }).then(e => {
                return e.text()
            }).then(text => {
                if(text == "OK") {
                    setDone (true)
                } else {
                    setError (text as string)
                }
            })
        }
    }
    const ui = (f: any) => (e: any) => f(e.target.value)
    return <div className="hero min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-highlight">Contact Form</h1>
        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
{(error || done) ? <FormResults error={error} email={email} done={done} /> : <ContactForm onSubmit={onSubmit} 
email={email} uiE={ui(setEmail)} 
message={message} uiM={ui(setMessage)}
nameOfPerson={nameOfPerson} uiN={ui(setName)}

/>}
        {/* <button className="btn btn-primary">Get Started</button> */}
      </div>
    </div>
  </div>
}
export function FormResults({ error, email, done } : {
    error: string | null,
    email: string, 
    done: Boolean
}) {
if(done) return <div>
        <p> Thank you for your message! you will eventually recive a response at {email}</p>
    </div>
    if(error) {
        return <p style={{ color: "var(--red)"}} className="font-bold">{error}</p>
    }
    return <p>idk</p>
}
export function ContactForm({ onSubmit,
     nameOfPerson, message, email,
    uiE,uiN,uiM 
}: any) {
    return <form onSubmit={onSubmit} className="form mt-5">
<label className="input input-bordered flex items-center mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="var(--mauve)" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input required type="email" className="grow" placeholder="Email" value={email} onChange={uiE} />
</label>
<label className="input input-bordered flex items-center mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="var(--mauve)" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input required type="text" className="grow" placeholder="Name" value={nameOfPerson} onChange={uiN} />
</label>
<label className="form-control">
  <div className="label">
    <span className="label-text">Message</span>
  </div>
  <textarea required value={message} onChange={uiM} className="textarea textarea-bordered h-24" placeholder="Hi there neon..." style={{ borderColor: "var(--mauve)"}}></textarea>
  <div className="label">
    {/* <span className="label-text-alt">Your bio</span>
    <span className="label-text-alt">Alt label</span> */}
  </div>
</label>
<div>
    <button type="submit" className="btn mauve" style={{ background: "var(--surface0)"}}>Submit</button>
</div>
    </form>
}