{/* PROJECTS */}
export default function Projects() {
    return (
<section id="projects" className="h-screen flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Project {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Short description of the project goes here.
                </p>
              </div>
            ))}
          </div>
        </section>
    );
}