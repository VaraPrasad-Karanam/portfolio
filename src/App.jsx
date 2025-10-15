import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 min-h-screen text-white">
      <Navbar />
      <main className="pt-20">
        <section id="hero" className="py-16 px-4 md:px-16"><Hero /></section>
        <section id="about" className="py-16 px-4 md:px-16"><About /></section>
        <section id="skills" className="py-16 px-4 md:px-16"><Skills /></section>
        <section id="projects" className="py-16 px-4 md:px-16"><Projects /></section>
        <section id="certifications" className="py-16 px-4 md:px-16"><Certifications /></section>
        <section id="contact" className="py-16 px-4 md:px-16"><Contact /></section>
      </main>
      <footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-700 mt-8">
        © {new Date().getFullYear()} KARANAM VEERA VENKATA VARA PRASAD — Built with React + Tailwind
      </footer>
    </div>
  );
}
