import { FormEvent, useState } from 'react'
import './styles.scss'

export function Newsletter() {
  const [value, setValue] = useState('')
  const [typeMsg, setTypeMsg] = useState('')
  const [alert, setAlert] = useState('')

  const alertClass = typeMsg !== '' ? "newsletter__alert newsletter__alert--" + typeMsg : "newsletter__alert"

  function handleSendNewsletter (event: FormEvent) {
    event.preventDefault()

    // regex formato email: teste@teste.com.br ou teste@teste.com
    const regexEmail = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
    if(!value) return (setAlert('Fill in with a valid email'), setTypeMsg('error'))
    
    if(regexEmail.test(value)) {
      console.log(value)
      setTypeMsg('success')
      setAlert('Sent with success!')
      setValue('')

      setTimeout(() => {
        setTypeMsg('')
        setAlert('')
      }, 5000)

    } else {      
      setAlert('Fill in with a valid email')
      setTypeMsg('error')
    }
  }

  return (
    <section className="newsletter-container">
      <div className="newsletter">
        <div className="newsletter__left">
          <div className="newsletter__title">
            Subscribe Now for Get Special Features!
          </div>
          <div className="newsletter__desc">
            Let's subscribe with us and find the fun.
          </div>
        </div>

        <form onSubmit={handleSendNewsletter} className="newsletter__right">
          <input 
            className={typeMsg === 'error' ? "newsletter__input newsletter__input--error" : "newsletter__input" }
            type="text"
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
          />
          <div className={alertClass}>{alert}</div>
          <button type="submit" 
            className="newsletter__btn btn-red"
          >
            Subscribe Now
          </button>
        </form>

      </div>
    </section>
  )
}