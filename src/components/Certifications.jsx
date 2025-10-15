import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  'MERN Full Stack — Ethnus (2025)',
  'MongoDB Associate Administrator — MongoDB (2025)',
  'Oracle GenAI Professional — Oracle (2025)',
  'Oracle Foundations Associate — Oracle (2025)'
];

export default function Certifications(){
  return (
    <section className="section" id="certifications">
      <motion.h2 className="text-2xl font-bold mb-6 text-purple-300" initial={{opacity:0}} animate={{opacity:1}}>Certifications</motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map(c => (
          <motion.div key={c} className="rounded-xl bg-white/10 text-blue-100 p-5 shadow border border-slate-600 hover:scale-105 transition" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
            • {c}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
