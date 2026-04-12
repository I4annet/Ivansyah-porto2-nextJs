"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "POLITERN Internship Management",
    description: "Campus platform for internship management, created with Laravel and Tailwind CSS",
    logo: "/politern.png",
    tech: "Laravel · Tailwind CSS",
  },
  {
    title: "Ivansyah Portfolio",
    description: "Interactive portfolio website with smooth animations using Next.js and Framer Motion.",
    logo: "/logo-portfolio.svg",
    tech: "Next.js · Framer Motion",
  },
  {
    title: "Sistem Bebas Tanggungan",
    description: "Web application for managing student financial obligations, built with HTML, CSS, JavaScript, and PHP.",
    logo: "/sikat-bata.jpg",
    tech: "HTML · CSS · JavaScript · PHP ",
  },
   {
    title: "Android Jawara",
    description: "A mobile application built with Flutter and Android Studio to streamline village administration, allowing residents to easily register new family members and sign up for community activities.",
    logo: "/android-jawara.png",
    tech: "Android Studio · Flutter",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Recent work</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="rounded-3xl bg-slate-50 p-3 shadow-sm">
                <Image src={project.logo} alt={`${project.title} logo`} width={52} height={52} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="text-sm text-slate-500">{project.tech}</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
