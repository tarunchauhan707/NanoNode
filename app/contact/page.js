"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call (replace with your API or email service)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      </header>

      <section className="bg-[#C1D8C3] max-w-lg mx-auto  p-6 shadow-lg rounded-md">
      <p className="text-lg text-gray-700 text-center mb-6 ">
         We&rsquo;d love to hear from you! Please fill out the form below with your message, and we will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} >
            
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 focus:outline-green-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 focus:outline-green-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-4 focus:outline-green-600"
            />
          </div>

          <div className="mb-4 text-center">
            <div className="flex justify-center space-x-4">
               <Link href="/">
                <button className="bg-[#B80000] rounded-lg shadow-lg px-5 py-2 font-bold text-white">
                    Back to Home
                </button>
                </Link>

                <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#54C392] text-white px-6 py-2 rounded-lg font-bold"
                >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            </div>

            {formStatus && (
            <div
              className={`text-center ${formStatus === 'Message sent successfully!' ? 'text-green-600' : 'text-red-600'}`}
              aria-live="polite"
            >
              {formStatus}
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;
