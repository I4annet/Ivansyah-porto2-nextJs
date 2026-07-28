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
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 md:ml-20">
        <div className="w-full max-w-[1440px] mx-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}