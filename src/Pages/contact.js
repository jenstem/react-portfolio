import React, { useState, useRef } from 'react';
import './contact.css';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';
import { toast } from "sonner"

const SmallLoader = () => {
    return <div className="small--Loader"></div>
}

export default function Contact() {
    const [sending, setSending] = useState(null)
    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        setSending(true)
        emailjs
            .sendForm(
                'service_srhstmv', 'template_fcjmcqq', form.current, e.target, {
                    publicKey: 'sN5KxwZnnbauM-BBg'})
            .then(
                (result) => {
                    if (result.text === "OK") {
                        setSending(false)
                        toast.success("Message sent successfully!")
                    }
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                    toast.success("Unable to send message, please try again!")
                },
            )
        e.target.reset()
    }

    return (
        <div className="contact" id="contact">

            <div className="contact-form">
                <div className="contact-container-one">
                <h1 id="Contact" className="contact-me">Contact Me</h1>
                </div>


                <form ref={form} onSubmit={handleSubmit} className="contact-form-group">
                    <div className="contact-form-group">
                        <input type="text" name="user_name" required="required" />
                        <span>Name</span>
                    </div>

                    <div className="contact-form-group">
                        <input type="email" name="user_email" required="required" />
                        <span>Email</span>
                    </div>

                    <div className="contact-form-group">
                        <textarea name="message" required="required" placeholder="Message" />
                        <span>Message</span>
                    </div>
                    <button type="submit" id="contact-button" className="contact-btn contact-btn-primary contact-btn-lg contact-btn-block">
                        {sending ? <SmallLoader /> : "SEND"}
                    </button>
                </form>
            </div>
        </div>
    )
}