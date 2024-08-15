import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css';
import ReCAPTCHA from "react-google-recaptcha";


// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();
    const onChange = () => {};

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_srhstmv",
                "template_fcjmcqq",
                form.current,
                "sN5KxwZnnbauM-BBg"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
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
                            <form id="contact-form-id" ref={form} onSubmit={sendEmail} className="contact-form-class" method="post" action="contact-form-process.php">

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
                                <ReCAPTCHA
                                        sitekey="6LeWoCcqAAAAABRw4eVc86c2eF3pxXltdw_X14aP"
                                        onChange={onChange}
                                    />
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

export default Contact;