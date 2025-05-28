import React from 'react'
import { useState } from 'react';
import RevealOnScroal from '../RevealOnScroal'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handlesubmit(e) {
    e.preventDefault()
    
    const {REACT_APP_EMAILJS_PUBLIC_KEY,REACT_APP_EMAILJS_TEMPLATE_ID,REACT_APP_EMAILJS_SERVICE_ID}=process.env;
    console.log(REACT_APP_EMAILJS_PUBLIC_KEY,REACT_APP_EMAILJS_TEMPLATE_ID,REACT_APP_EMAILJS_SERVICE_ID)
    if (!REACT_APP_EMAILJS_PUBLIC_KEY || !REACT_APP_EMAILJS_TEMPLATE_ID || !REACT_APP_EMAILJS_SERVICE_ID) {
      alert("EmailJS configuration is missing. Please check your environment variables.");
      return;
    }
    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE_ID,
          REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Email sent successfully:", result);
        toast.success("Email sent successfully!",{
          position: "top-right",
            autoClose: 3000,
        });
      })
      .catch((error) => {
        alert("An error occurred. Please try again.");
        console.log("EmailJS error:", error);
        toast.error("An error occurred. Please try again.",{
          position: "top-right",
            autoClose: 3000,
        });
      });
    
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }
  return (
    <RevealOnScroal>
      <section
        id="Contact"
        className="min-h-screen flex items-center justify-center "
      >
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handlesubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
             focus:ring-2  focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                placeholder="Name..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
              focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5
              focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-20 relative overflow-hidden"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </RevealOnScroal>
  )
}

export default Contact