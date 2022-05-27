import './Contact.css';
import { useState } from 'react'
import sendEmail from '../../services/email.js'


const INITIAL_CONTACT = {
    name: '',
    email: '',
    message: ''
}

export const Contact = () => {
    const [contact, setContact] = useState(INITIAL_CONTACT)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let res = await sendEmail(contact)
        if(res.data === 'Message sent' && res.status === 200) {
            alert('email sent')
        }

        console.log(contact)
        setContact(INITIAL_CONTACT)
    }

    const handleName = (e) => {
        let newContact = {
            ...contact,
            name: e.target.value
        }
        setContact(newContact)
    } 
    
    const handleEmail = (e) => {
        let newContact = {
            ...contact,
            email: e.target.value
        }
        setContact(newContact)
    }
    
    const handleMessage = (e) => {
        let newContact = {
            ...contact,
            message: e.target.value
        }
        setContact(newContact)
    }

    return (
        <main id="main-wrapper">
            <section>
                <article id="contact-content">
                    <h1 id="contact-title">Let's talk.</h1>
                    <p id="contact-p">Have a question or want to work together? <br/>Get in touch via the form below, or
                        by emailing <a href="mailto:alexsanor13@gmail.com">alexsanor13@gmail.com</a>.
                    </p>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" type="text" placeholder="Enter your name" maxLength="256" value={contact.name} onChange={handleName} autoFocus
                            required />
                        <label htmlFor="email">Email address:</label>
                        <input name="email" id="email" type="email" placeholder="Enter your email address" maxLength="256" value={contact.email} onChange={handleEmail}
                            required />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" placeholder="Enter your message" minLength="5" maxLength="2000" value={contact.message} onChange={handleMessage} required></textarea>
                        <br/>
                        <button className="btn-two" type="submit"><span>Submit</span></button>
                    </form>
                </article>
            </section>
        </main>
  );
}