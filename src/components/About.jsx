import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="section" id="about">
      <motion.div className="card rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg p-8" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
        <h2 className="text-2xl font-bold text-blue-300">About Me</h2>
        <p className="mt-4 text-slate-100 font-medium">
          I'm <strong>Karanam Veera Venkata Vara Prasad</strong>, a Computer Science undergraduate from VIT-AP University, graduating in 2026.
          I specialize in MERN stack development, IoT-based systems, and data science integration. I enjoy solving real-world problems using scalable software solutions and cloud technologies.
        </p>
        <ul className="mt-4 space-y-2 text-blue-200">
          <li>🎓 <strong>Education:</strong> B.Tech in CSE, CGPA 8.68 (VIT-AP)</li>
          <li>💼 <strong>Experience:</strong> Data Science Intern at Codtech IT Solutions (Sep 2025 – Present)</li>
          <li>⚙️ <strong>Interests:</strong> Full Stack Development, Data Science, IoT, and AI</li>
        </ul>
      </motion.div>
    </section>
  )
}
