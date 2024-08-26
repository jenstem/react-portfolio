import React, { useState, useRef } from 'react';
import './contact.css';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .sendForm(
                'service_srhstmv', 'template_fcjmcqq', e.target, {
                publicKey: 'sN5KxwZnnbauM-BBg',
            }
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );

        e.target.reset();
    };
    return (
        <div id="contact">
            <div className="contact-form">
                <div className="contact-container-one">
                    <h1 id="Contact" className="contact-me">Contact Me</h1>
                </div>
                <div className="contact-container">
                    <div className="contact-container-second">
                        <div className="form-container">
                            <form onSubmit={sendEmail} className='contact-form-class'>
                                <label className='contact-label'>Your name</label>
                                <div className='contact-input-group'>
                                <input type="text" name="user_name" className='contact-form-control contact-form-group' placeholder="Enter your name" required/>
                                </div>
                                <div className='contact-form-group'>
                                <label className='contact-label'>Your email</label>
                                <div className='contact-input-group'>
                                <input className='contact-form-control' type="email" name="user_email" placeholder="Enter your email address" required/>
                                </div>
                                </div>
                                <div className='contact-form-group'>
                                <label className='contact-label'>Your message</label>
                                <div className='contact-input-group'>
                                <textarea className='contact-form-control contact-form-group' name="message" placeholder="Enter your message" required/>
                                <input className='contact-btn contact-btn-primary contact-btn-lg contact-btn-block' type="submit" value="Send" disabled={isSubmitting} />
                                {stateMessage && <p>{stateMessage}</p>}
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

                            );
};
                            export default Contact;