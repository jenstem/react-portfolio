import React, { useState, useRef } from 'react';
import './contact.css';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_srhstmv', 'template_fcjmcqq', form.current, {
                publicKey: 'sN5KxwZnnbauM-BBg',
            })
            .then(
                () => {
                    console.log('SUCCESS! Message sent.');
                    toast.success('Message sent successfully');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send message');
                },
            );
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
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
                            <form id="contact-form-id" ref={form} onSubmit={handleSubmit} className="contact-form-class" method="post" action="contact-form-process.php">

                                <div className="contact-form-group">
                                    <label name="Name" className="contact-label">Your name</label>
                                    <div className="contact-input-group">
                                        <input type="text" id="Name" name="user_name" className="contact-form-control" defaultValue={name} onBlur={handleChange} placeholder="Enter your name" required />
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label name="Email" className="contact-label">Your email address</label>
                                    <div className="contact-input-group">
                                        <input type="email" id="Email" name="user_email" defaultValue={email} onBlur={handleChange} className="contact-form-control" placeholder="Enter your email address" required />
                                    </div>
                                </div>

                                <div className="contact-form-group">
                                    <label name="Message" className="contact-label">Your message</label>
                                    <div className="contact-input-group">
                                        <textarea id="Message" name="message" defaultValue={message} onBlur={handleChange} className="contact-form-control" rows="6" maxLength="3000" placeholder="Enter your message" required></textarea>
                                        {errorMessage && (
                                            <div>
                                                <p className="error-text">{errorMessage}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="contact-form-group">
                                    <button type="submit" id="contact-button" className="contact-btn contact-btn-primary contact-btn-lg contact-btn-block">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar"></div>
        </div>
    );
};