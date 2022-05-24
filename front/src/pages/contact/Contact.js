import './Contact.css';
import { useState } from 'react'


const INITIAL_CONTACT = {
    name: '',
    email: '',
    message: ''
}

export const Contact = () => {
    const [contact, setContact] = useState(INITIAL_CONTACT)
    const [verified, setVerified] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(verified){
            alert("verificado y enviado")
        }
        else{
            alert("no verificado")
        }
        
        console.log(contact)
        setContact(INITIAL_CONTACT)
        setVerified(false)
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
                        <textarea name="message" placeholder="Enter your message" maxLength="2000" value={contact.message} onChange={handleMessage} required></textarea>
                        <br/>
                        <button className="btn-two" type="submit"><span>Submit</span></button>
                    </form>
                </article>
            </section>
        </main>
  );
}