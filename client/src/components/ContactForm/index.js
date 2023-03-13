import React, { useRef, useState } from 'react'
import './style.css'
// import axios from 'axios';
import emailjs from '@emailjs/browser';

function ContactForm() {

    

    // const [state, setState] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    //   })

    // const sendEmail = e => {
    //     e.preventDefault();
    //     axios
    //     .post('/send', {...state})
    //     .then(res => {
    //         setResult(res.data)
    //         setState({ name: '', email: '', subject: '', message: '' });
    //     })
    //     .catch(() => {
    //         setResult({ success: false, message: 'Something went wrong. Try again later'});
    //     })
       
    //   };

    //   const onInputChange = e => {
    //     const { name, value } = e.target;
    
    //     setState({
    //       ...state,
    //       [name]: value
    //     });
    //   };

    const [result, setResult] = useState(null)
    const [submit, setSubmit] = useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2z0y2yd', 'template_rj26eta', form.current, 'O3DhnQx7VFXCzZRrB')
      .then((result) => {
          console.log(result.text);
          setResult({ success: true, message: 'Thank you for your message. We\'ll be in touch soon.'})
          setSubmit(true)
      }, (error) => {
        setResult({ success: false, message: 'Something went wrong. Please try again later'})
        console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <>
        {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
               {result.message} 
            </p>
        )}
        {/* <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name
                <input type="text" id="name" name="name"  placeholder="Enter your full name" />
            </label>
            <label htmlFor="email">Email
                <input type="email" id="email" name="email" placeholder="Enter your email" />
            </label>
            <label htmlFor="subject">Subject
                <input type="text" id="subject" name="subject"  placeholder="Enter subject" />
            </label>
            <label htmlFor="message">Message
                <textarea id="message" name="message"  placeholder="Enter message" />
            </label>
            <input type="submit" value='Send'/>
        </form> */}
        {!submit && (
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name *</label>
              <input type="text" name="name" id='name' required/>
            <label htmlFor="email">Email *</label>
              <input type="email" name="email" id='email' required/>
            <label htmlFor="message">Message *</label>
              <textarea name="message" rows="5" cols="40" id='message' required autoComplete='off' />
            <input type="submit" value="Send" className='pointer form-submit'/>
          </form>
        )}
    
    </>
  )
}

export default ContactForm
