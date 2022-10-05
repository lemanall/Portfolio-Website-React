import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
  
  emailjs.sendForm('service_fqo9lp5', 'template_my9je39', form.current, '7052PCQRuVJ2UeY2m')

  e.target.reset()
  };

  return <section id="contact">
<h5>Get In Touch</h5>
<h2> Contact Me </h2>

<div className="container contact__container">
  <div className="contact__options">
    <article className='contact__option'>
      <MdOutlineEmail />
      <h4>Email</h4>
      <h5>lemanallahverdiyeva03@gmail.com</h5>
      <a href="mailto:lemanallahverdiyeva03@gmail.com" target="_blank">Send a message</a>
    </article>
    <article className='contact__option'>
      <RiMessengerLine   />
      <h4>Messenger</h4>
      <h5>lemanallahverdiyeva</h5>
      <a href="mailto:lemanallahverdiyeva03@gmail.com" target="_blank">Send a message</a>
    </article>
    <article className='contact__option'>
      <BsWhatsapp />
      <h4>WhatsApp</h4>
      <h5>+994555555555</h5>
      <a href="https://api.whatsapp.com/send?phone+994555555555" target="_blank">Send a message</a>
    </article>
  </div>


  <form ref={form}  onSubmit={sendEmail}>
  <input type="text" name='name' placeholder="Your Full Name" required />
    <input type="email" name='email' placeholder="Your Email" required />
    <textarea name="message"  placeholder="Your message" rows="7"></textarea>
    <button type="submit" className="btn btn-primary" >Send Message</button>
  </form>
</div>
  </section>
};

export default Contact;
