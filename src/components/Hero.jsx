import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import me from '../assets/me.jpg';

export default function Hero() {
  return (
    <section id="hero" className="section text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-16 py-28">
      <motion.img
        src={me}
        alt="Varaprasad Karanam"
        className="w-48 h-48 rounded-full border-4 border-blue-600 object-cover shadow-xl hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          KARANAM VEERA VENKATA VARA PRASAD
        </h1>
        <p className="mt-3 text-xl text-slate-300">MERN Stack & Java Developer</p>
        <p className="mt-6 max-w-2xl text-slate-300">
          B.Tech CSE student (VIT AP, 2026) skilled in MERN, Java, and cloud deployment — passionate about building scalable, data-driven web applications integrating AI and IoT systems.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap">
          <a href="https://github.com/VaraPrasad-Karanam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400 hover:from-blue-600 hover:to-purple-600 bg-gradient-to-r from-slate-800 to-blue-800 text-white shadow hover:scale-105 transition">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/varaprasad-karanam/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400 hover:from-blue-600 hover:to-purple-600 bg-gradient-to-r from-slate-800 to-blue-800 text-white shadow hover:scale-105 transition">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:prasadvvvkaranam@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400 hover:from-blue-600 hover:to-purple-600 bg-gradient-to-r from-slate-800 to-blue-800 text-white shadow hover:scale-105 transition">
            <Mail size={16} /> Email
          </a>
          <a href="https://leetcode.com/u/22BCE9852_vitap/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400 hover:from-blue-600 hover:to-purple-600 bg-gradient-to-r from-slate-800 to-blue-800 text-white shadow hover:scale-105 transition">
            <Code2 size={16} /> LeetCode
          </a>
        </div>
      </motion.div>
    </section>
  );
}
