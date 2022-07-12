import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vigmovd', 'template_f9c4ytv', form.current, 'XBXnQBHi9h8Q9ec8K')
        
        e.target.reset();
    };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className='contact_option'>
                    <MdOutlineEmail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>fengfei721@hotmail.com</h5>
                    <a href="mailto:fengfei721@hotmail.com" target="_blank">Send a message</a>
                </article>

                <article className='contact_option'>
                    <BsWhatsapp className='contact_option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>Email is preferred</h5>
                    <a href="https://api.whatsapp.com/send?phone+12892414057" target="_blank">Send a message</a>
                </article>
            </div>

            {/*   message form   */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required >
                    </textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>

        </div>
    </section>
  )
}

export default Contact
