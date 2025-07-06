import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      'service_wnwk7b9',
      'template_8vfogye',
      form.current,
      'IEJczqHsskcmwXBVK'
    ).then((result) => {
      console.log("Success:", result.text);
      setStatus("Message sent ✅");
      form.current.reset();
    }).catch((error) => {
      console.error("Failed:", error);
      setStatus("Failed to send ❌. Please check your network or try again.");
    });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <input type="text" name="phone" placeholder="Your phone number" />
        <textarea name="message" placeholder="Type your message" required />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Newsletter;
