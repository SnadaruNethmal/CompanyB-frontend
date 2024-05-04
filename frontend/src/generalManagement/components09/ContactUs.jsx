// ContactForm.js

import React, { useState } from 'react';
import './ContactForm.css';
import img from './assets/img.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulating submission success (replace with actual submission logic)
      setTimeout(() => {
        setSubmissionSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1000);
    }
  };

  const handleOK = () => {
    window.location.href = '/general-management'; // Redirect to dashboard
  };

  return (
    <div className="contact-form-container">
      
      <div className="background-gradient"></div>
      <div className="form-container">
        <h2>Contact Us</h2>
        {!submissionSuccess ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={formErrors.firstName ? 'error' : ''}
              />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={formErrors.lastName ? 'error' : ''}
              />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={formErrors.subject ? 'error' : ''}
              />
              {formErrors.subject && <span className="error">{formErrors.subject}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={formErrors.message ? 'error' : ''}
              ></textarea>
              {formErrors.message && <span className="error">{formErrors.message}</span>}
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        ) : (
          <div className="submission-success">
            <p>Thank you for your submission! </p>
            <button onClick={handleOK} className="ok-btn">OK</button>
          </div>
        )}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Contact Us Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactForm;
