import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={formErrors.name ? 'error' : ''}
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'error' : ''}
        />
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={formErrors.message ? 'error' : ''}
        ></textarea>
        {formErrors.message && <p className="error-message">{formErrors.message}</p>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
