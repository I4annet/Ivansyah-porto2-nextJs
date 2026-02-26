"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { icon: faHome },
  { icon: faUser },
  { icon: faEnvelope },
  { icon: faContactBook },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="h-[40vh] w-14 bg-gray-900 text-white 
                    flex flex-col items-center  
                    rounded-tr-2xl rounded-br-2xl">

      <nav className="flex flex-col gap-6 mt-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-lg transition-all duration-300
              ${activeIndex === index
                ? "text-blue-500 scale-125"
                : "hover:text-blue-400 hover:scale-110"
              }`}
          >
            <FontAwesomeIcon icon={item.icon} />
          </button>
        ))}
      </nav>

    </div>
  );
}