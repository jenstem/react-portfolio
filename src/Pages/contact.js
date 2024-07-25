// import React, { useState, useRef } from 'react';
// import './contact.css';
// import { validateEmail } from '../utils/helpers';
// import emailjs from '@emailjs/browser';
// import { toast } from "sonner"

// export default function Contact() {
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const [errorMessage, setErrorMessage] = useState('');
//     const { name, email, message } = formState;
//     const form = useRef();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm('service_srhstmv', 'template_fcjmcqq', form.current, {
//                 publicKey: 'sN5KxwZnnbauM-BBg',
//             })
//             .then(
//                 () => {
//                     toast.success("Message sent successfully"),
//                     console.log('SUCCESS! Message sent.');
//                 },
//                 (error) => {
//                     toast.error("Message not sent"),
//                     console.log('FAILED...', error.text);
//                 },
//             );
//         if (!errorMessage) {
//             console.log('Submit Form', formState);
//         }
//         e.target.reset();
//     };

//     const handleChange = (e) => {
//         if (e.target.name === "email") {
//             const isValid = validateEmail(e.target.value);
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid');
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//         if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value });
//             console.log('Handle Form', formState);
//         }
//     };
//     return (
//         <div id="contact">
//             <div className="contact-form">
//                 <div className="contact-container-one">
//                     <h1 id="Contact" className="contact-me">Contact Me</h1>
//                 </div>
//                 <div className="contact-container">
//                     <div className="contact-container-second">
//                         <div className="form-container">
//                             <form id="contact-form-id" ref={form} onSubmit={handleSubmit} className="contact-form-class" method="post" action="contact-form-process.php">

//                                 <div className="contact-form-group">
//                                     <label name="Name" className="contact-label">Your name</label>
//                                     <div className="contact-input-group">
//                                         <input type="text" id="Name" name="user_name" className="contact-form-control" defaultValue={name} onBlur={handleChange} placeholder="Enter your name" required />
//                                     </div>
//                                 </div>

//                                 <div className="contact-form-group">
//                                     <label name="Email" className="contact-label">Your email address</label>
//                                     <div className="contact-input-group">
//                                         <input type="email" id="Email" name="user_email" defaultValue={email} onBlur={handleChange} className="contact-form-control" placeholder="Enter your email address" required />
//                                     </div>
//                                 </div>

//                                 <div className="contact-form-group">
//                                     <label name="Message" className="contact-label">Your message</label>
//                                     <div className="contact-input-group">
//                                         <textarea id="Message" name="message" defaultValue={message} onBlur={handleChange} className="contact-form-control" rows="6" maxLength="3000" placeholder="Enter your message" required></textarea>
//                                         {errorMessage && (
//                                             <div>
//                                                 <p className="error-text">{errorMessage}</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="contact-form-group">
//                                     <button type="submit" id="contact-button" className="contact-btn contact-btn-primary contact-btn-lg contact-btn-block">Submit</button>
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bar"></div>
//         </div>
//     );
// };


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
/               </div>
                {/* <div className="contact--info" data-aos="fade-right" data-aos-duration="1000">
                    <div className="contact--icon">
                        <span>Tampa, Florida</span>
                    </div>

                    <div className="contact--icon">
                        <span>wdiazdev@gmail.com</span>
                    </div>
                </div> */}

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
                        <textarea name="message" required="required" placeholder="" />
                    </div>
                    <button type="submit" id="contact-button" className="contact-btn contact-btn-primary contact-btn-lg contact-btn-block">
                        {sending ? <SmallLoader /> : "SEND"}
                    </button>
                </form>
            </div>
        </div>
    )
}