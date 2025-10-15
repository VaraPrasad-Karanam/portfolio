import React from 'react';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          Varaprasad
        </h1>
        <ul className="flex gap-6 text-slate-300">
          {['about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
