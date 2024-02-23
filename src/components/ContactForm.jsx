import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  message: ''
}

function ContactForm () {
  const [contactForm, setContactForm] = useState(initialForm)

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value.trim()
    })
  }

  return (
    <form className='contact-form' action='https://formsubmit.co/amarillaoliver70@gmail.com' method='POST'>
      <label>
        Name
        <input type='text' name='name' onChange={handleChange} required />
      </label>
      <label>
        Email
        <input type='email' name='email' onChange={handleChange} required />
      </label>
      <label>
        Message
        <textarea name='message' id='message' rows='5' onChange={handleChange} required />
      </label>
      <button type='submit'>SUBMIT</button>

    </form>
  )
}

export default ContactForm
