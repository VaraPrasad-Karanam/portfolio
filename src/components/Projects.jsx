import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Frizzo Vending Machine (IoT + Payments)',
    desc: 'Raspberry Pi–based smart vending machine integrated with UPI and Stripe for real-time cashless transactions. Processed 150+ transactions with zero downtime.',
    github: 'https://github.com/VaraPrasad-Karanam/Frizzo-Vending-Machine',
    live: 'https://www.youtube.com/watch?v=mcWkoIMRP3E'
  },
  {
    title: 'Heart Rate Analyzer (IoT + Web)',
    desc: 'IoT-based health monitoring app with Twilio alerts and React dashboard. Enabled real-time anomaly detection and cloud data logging.',
    github: 'https://github.com/VaraPrasad-Karanam/Heart-Rate-Analyzer',
    live: null
  },
  {
    title: 'AI Chatbot',
    desc: 'Conversational AI chatbot using NLP models and REST APIs for dialogue flow. Deployed with Node.js backend and web interface.',
    github: 'https://github.com/VaraPrasad-Karanam/AI-chatbot',
    live: null
  },
  {
    title: 'Food Blog Website',
    desc: 'Modern food blog website built with React and responsive UI, deployed on Netlify.',
    github: 'https://github.com/VaraPrasad-Karanam',
    live: 'https://food-blog-web.netlify.app/'
  }
];

export default function Projects(){
  return (
    <section className="section" id="projects">
      <motion.h2 className="text-2xl font-bold mb-6 text-purple-300" initial={{opacity:0}} animate={{opacity:1}}>Projects</motion.h2>
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(p => (
          <motion.div key={p.title} className="bg-gradient-to-br from-blue-800 via-purple-800 to-blue-700 rounded-2xl shadow-xl p-6 border border-slate-600 hover:scale-105 transition" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-blue-100">{p.desc}</p>
            <div className="mt-4 flex gap-3 flex-wrap">
              {p.github && <a href={p.github} target="_blank" className="px-3 py-1 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition">GitHub</a>}
              {p.live && <a href={p.live} target="_blank" className="px-3 py-1 rounded-md bg-purple-600 text-white shadow hover:bg-purple-700 transition">Live Demo</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
