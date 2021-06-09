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
                        <h2 style={{color:'#e1e8ec'}}>Send Us a Message</h2>
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
                  <button className='button-submit' type="submit" value="Send" >DONT press this button limited mails left</button>
             </form>
                </div>
                <div className="contact-info">
                    <hr className='heading-separator'/>
                    <div className="contact-info-bottom">
                        <div className="contact-info-box">
                            <h3><i className="far fa-building"></i>   Office Address</h3>
                            <p>#315, 10357 109 Street,</p>
                            <p> Edmonton, AB T5J 1N3</p>
                        </div>
                        <div className="contact-info-box">
                            <h3><i className="far fa-clock"></i>    Office Timeing</h3>
                            <p>#315, 10357 109 Street,</p>
                            <p> Edmonton, AB T5J 1N3</p>
                        </div>
                        <div className="contact-info-box">
                            <h3><i className="fas fa-phone-volume"></i>    Phone Number</h3>
                            <p>#315, 10357 109 Street,</p>
                            <p> Edmonton, AB T5J 1N3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;