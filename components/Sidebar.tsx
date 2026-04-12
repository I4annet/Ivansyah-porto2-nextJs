"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { icon: faHome, label : "home", },
  { icon: faUser, label : "about", },
  { icon: faCode, label : "skills", },
  { icon: faFolderOpen, label : "projects", },
  { icon: faEnvelope, label : "contact", },
];

export default function Sidebar() {
   const [activeIndex, setActiveIndex] = useState(0);

  // 🔥 Klik → scroll ke section
  const handleScroll = (id: string, index: number) => {
    setActiveIndex(index);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 Auto highlight saat scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map((item) => item.label);

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
       <div className="hidden md:flex fixed top-1/2 -translate-y-1/2 h-[45vh] w-14 bg-gray-900 text-white 
                    flex-col items-center  
                    rounded-tr-3xl rounded-br-3xl z-10">

     <nav className="flex flex-col gap-6 mt-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleScroll(item.label, index)}
            title={item.label}
            className={`relative group text-xl transition-all duration-300
              ${
                activeIndex === index
                  ? "text-blue-500 scale-125"
                  : "hover:text-blue-400 hover:scale-110"
              }`}
          >
            <FontAwesomeIcon icon={item.icon} />

            {/* 🔥 Tooltip */}
            <span className="absolute left-12 
              bg-gray-800 text-white text-xs px-2 rounded
              opacity-0 group-hover:opacity-100">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}