"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  { name: "Email Me", icon: faEnvelope, href: "mailto:ivansyahsantoso@gmail.com" },
  { name: "LinkedIn", icon: faLinkedin, href: "https://www.linkedin.com/in/ivansyah-eka-oktaviadi-santoso/" },
  { name: "GitHub", icon: faGithub, href: "https://github.com/I4annet" },
  { name: "Download CV", icon: faFilePdf, href: "https://drive.google.com/file/d/1YjPX-kr29omt1DfCbBGMGoKotEkuv2he/view?usp=sharing" },
  { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/ivansyaheka_41/" },
  { name: "Whatsapp", icon: faWhatsapp, href: "https://wa.me/6285707092328" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mb-10"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">Let&apos;s work together</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-8"></p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact, i) => (
          <motion.a
            key={i}
            href={contact.href}
            target={contact.name !== "Email Me" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileHover={{ y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 px-6 py-4 text-slate-700 dark:text-slate-300 shadow-lg shadow-slate-100/50 dark:shadow-none transition-all duration-300 hover:bg-sky-600 dark:hover:bg-sky-600 hover:text-white dark:hover:text-white"
          >
            <FontAwesomeIcon icon={contact.icon} className="text-xl" />
            <span className="font-medium">{contact.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
