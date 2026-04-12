"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 gap-12 md:gap-24">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl space-y-6"
      >
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-sky-600 font-semibold">
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          My Portfolio
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
          Hi, I&apos;m Ivansyah.
          <span className="text-sky-600"> Modern Web developer</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl leading-8">
          I am a passionate web developer specializing in creating responsive and user-friendly applications. With experience in both frontend and backend technologies, I enjoy bringing ideas to life through clean and efficient code.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 shadow-sm">Next.js</span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 shadow-sm">Tailwind CSS</span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 shadow-sm">Laravel</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        className="relative flex-shrink-0"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-500 via-violet-500 to-blue-600 blur-2xl opacity-50" />
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
          <Image
            src="/me.jpeg"
            alt="Hero profile"
            width={200}
            height={200}
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
