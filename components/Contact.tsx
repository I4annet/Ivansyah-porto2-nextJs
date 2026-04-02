"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { button } from "framer-motion/m";

const contacts = [
    { name: "Email Me", icon: faEnvelope },
    { name: "LinkedIn", icon: faLinkedin },
    { name: "GitHub", icon: faGithub },
    { name: "Download CV", icon: faFilePdf },
]
export default function Contact() {
    return (
        <section id="contact" className="h-screen flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="mb-4">Let`s work together!</p>

          <div className="flex gap-4">
            {contacts.map((contact, i) => (
                <button key={i} className="px-6 py-2 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition">
                  <FontAwesomeIcon icon={contact.icon} className="mr-2" />
                  {contact.name}
                </button>
            ))}
          </div>
        </section>
    );
}