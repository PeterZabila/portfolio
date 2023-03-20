import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {TbBrandTelegram} from "react-icons/tb";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5o1do5','template_ojzaewl', form.current, 'bWMquDmtZwdr5JsG7' )
    e.target.reset();
  }


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>petrozabila@gmail.com</h5>
            <a href="mailto:petrozabila@gmail.com" target="_blank" rel="noreferrer">Send a message via email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>FB</h5>
            <a href="https://m.me/petro.zabila" target="_blank" rel="noreferrer">Send a message via email</a>
          </article>

          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <a href="https://petrozabila.t.me" target="_blank" rel="noreferrer">Write me on Telegram</a>
          </article>
        </div>
        <div className="contact__options">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name" required/>
            <input type="email" name="email" placeholder="Your email" required/>
            <textarea name="message" rows="7" placeholder="Your message" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

        </div>
    </section>
  )
}

export default Contact;
