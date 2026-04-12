"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">
          About Me
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Professional Focus</h2>
        <p className="max-w-2xl text-lg text-slate-600 leading-8">
         I am a D4 Informatics Engineering student at the State Polytechnic of Malang, specializing in Full-stack Development. I am passionate about crafting high-performance, responsive, and user-centric web applications. My core technical expertise includes building seamless digital experiences using React, Next.js, and Tailwind CSS, backed by robust server-side logic with Laravel.
        </p>
      </motion.div>
    </section>
  );
}