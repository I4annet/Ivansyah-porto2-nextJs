"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faTailwindCss,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5, color: "text-orange-500" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "React", icon: faReact, color: "text-cyan-400" },
  { name: "Git", icon: faGitAlt, color: "text-red-500" },
  { name: "Tailwind CSS", icon: faTailwindCss, color: "text-teal-400" },
  { name: "Next.js", icon: faReact, color: "text-cyan-800" },
  { name: "TypeScript", icon: faJs, color: "text-blue-600" },
  { name: "Laravel", icon: faLaravel, color: "text-red-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-12">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What I use</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="p-4 bg-white rounded-3xl shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-2xl transition-transform"
          >
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={skill.icon} className={`text-3xl ${skill.color}`} />
              <span className="font-medium text-slate-700">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


