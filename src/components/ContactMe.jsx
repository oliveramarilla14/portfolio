import ContactForm from './ContactForm'
import ContactMedia from './ContactMedia'
import './contactMe.css'

function ContactMe () {
  return (
    <section id='contact' className='bg-black'>
      <div className='contact container'>
        <h3 className='title'>contactMe<span>( )</span></h3>
        <div className='contact-items'>
          <ContactForm />
          <ContactMedia />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
