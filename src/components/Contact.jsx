import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs.send(
      'service_icvwk2u',
      'template_16hmugh',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      '3PAnIRnI7SbGix7jt'
    ).then(
      (result) => {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
        setTimeout(() => setSubmitted(false), 4000); // auto-dismiss thank you
      },
      (error) => {
        setError('Message failed: ' + error.text);
        setLoading(false);
      }
    );
  };

  return (
    <section className="flex items-center justify-center min-h-[50vh] py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl bg-white/15 backdrop-blur-xl shadow-2xl w-full max-w-lg p-10 border border-slate-700"
      >
        <h2 className="text-3xl font-bold text-center mb-3">Contact Me</h2>
        {submitted &&
          <motion.p
            className="text-green-400 text-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >Thank you for reaching out!</motion.p>
        }
        {error &&
          <motion.p
            className="text-red-400 text-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >{error}</motion.p>
        }
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="peer p-3 w-full bg-white/60 rounded-xl border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder=" " // placeholder is needed for floating label
            />
            <label className="absolute left-3 top-0 text-gray-600 peer-focus:-top-3 peer-focus:text-blue-600 bg-transparent transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400">
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="peer p-3 w-full bg-white/60 rounded-xl border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder=" "
            />
            <label className="absolute left-3 top-0 text-gray-600 peer-focus:-top-3 peer-focus:text-blue-600 bg-transparent transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400">
              Your Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="peer p-3 w-full bg-white/60 rounded-xl border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder=" "
            />
            <label className="absolute left-3 top-0 text-gray-600 peer-focus:-top-3 peer-focus:text-blue-600 bg-transparent transition-all pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400">
              Your Message
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-xl shadow hover:from-blue-700 hover:to-purple-800 transition font-semibold ${loading && "opacity-60 cursor-not-allowed"}`}
          >
            {loading ? (
              <motion.span className="inline-block w-5 h-5 border-2 border-white border-t-blue-500 rounded-full animate-spin mr-2"></motion.span>
            ) : null}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
