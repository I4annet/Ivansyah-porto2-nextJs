// app/(root)/page.tsx
import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import About from "@/components/About";


export default function Home() {
  return (
    <div className="flex bg-gray-100 text-blue-900">
      <Sidebar />

      <main className="flex-1 ml-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>
    </div>
  );
}