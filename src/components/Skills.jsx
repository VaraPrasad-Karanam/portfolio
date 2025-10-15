import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Languages': ['Java', 'Python', 'JavaScript'],
  'Frontend': ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  'Backend': ['Node.js', 'Express.js', 'MongoDB'],
  'Cloud & Tools': ['AWS', 'Git', 'GitHub', 'Vercel', 'VS Code']
};

export default function Skills(){
  return (
    <section className="section" id="skills">
      <motion.h2 className="text-2xl font-bold mb-6 text-purple-300" initial={{opacity:0}} animate={{opacity:1}}>Technical Skills</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([title, list]) => (
          <motion.div key={title} className="bg-white/10 rounded-xl shadow border border-purple-600 p-6" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
            <h3 className="font-semibold text-blue-200 mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(s => <span key={s} className="px-3 py-1 rounded-full bg-purple-700/70 text-white text-sm shadow">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

