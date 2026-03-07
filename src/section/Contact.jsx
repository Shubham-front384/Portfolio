import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import qrImg from '../assets/Img/qr.jpeg'

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ky7s0mr',
        'template_m6ey3al',
        formData,
        'Nelzg52iZGFJhlb-Z'
      )
      .then(
        () => {
          alert('Message sent successfully ✅');

          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error);
          alert('Something went wrong ❌');
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Wan'na Connect</h2>
          <p>Have a question or project idea? Send us a message.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="contact-right">
          <img src={qrImg} alt="contact" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
