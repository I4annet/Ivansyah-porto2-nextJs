"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5, color: "text-orange-500" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "React", icon: faReact, color: "text-cyan-400" },
  { name: "Git", icon: faGitAlt, color: "text-red-500" },
];

  {/* SKILLS */}
  export default function Skills() {
    return (
       <section id="skills" className="h-screen flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-xl shadow hover:scale-105 hover:shadow-lg transition flex items-center gap-3"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-2xl ${skill.color}`}
                />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
        );
    }
    

