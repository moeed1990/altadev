import React from 'react';
import emailjs from "emailjs-com";
import './Contact.css'

function Contact(props) {
    function sendEmail(e) {
        e.preventDefault();
    console.log(emailjs.te)
    emailjs.sendForm('default_service', 'altadev_email_90', e.target, 'user_KuONBhxvKnig3PAA7CvEJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <>
            <div className="contact-container">
             <div className='contact-top'>
                    <hr className='heading-separator'/>
                    <h3 className='about-head'>
                    Get In Touch with Us
                    </h3>
             </div>
                <div className="form-art-container">
                    <div className="form-side-image">
                        <img src='/images/img-11.jpg' />
                    </div>
                    <form className="main-form" onSubmit={sendEmail}>
                        <h2>Send Us a Message</h2>
                 <div className="box-item">
                     <input type="text" placeholder="Name" name="name" />
                 </div>
                 <div className="box-item">
                     <input type="email" placeholder="Email" name="email" />
                 </div>
                 <div className="box-item">
                     <input type="text" placeholder="Phone No." name="phone" />
                 </div>
                 <div className='box-item'>
                     <textarea name="message" placeholder="Type Your Message Here" />
                 </div>
                  <input type="submit" value="Send" />
             </form>
                </div>
                <div className="contact-info">
                    ala dev in fo
                </div>
            </div>
        </>
    );
}

export default Contact;