// app/(root)/page.tsx
import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex bg-gray-100 text-blue-900">
      <Sidebar />

      <main className="flex-1 ml-20">
        {/* HERO */}
        <section className="h-screen flex flex-col justify-center px-6">
          <h1 className="text-5xl font-bold mb-4">Hi, I`m Ivansyah</h1>
          <p className="text-lg max-w-xl text-black font-light">
            A passionate developer focused on building modern web applications
            with clean and scalable design.
          </p>
        </section>

        {/* ABOUT */}
        <section className="h-screen flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            I am a D4 Informatics student with an interest in frontend and backend
            development. I enjoy creating responsive and user-friendly
            applications using modern technologies like React, Next.js, and
            Tailwind CSS.
          </p>
        </section>

        <Skills />
        <Projects />
        <Contact />

      </main>
    </div>
  );
}