import Image from "next/image";
import Link from "next/link";

// Define project data
const projects = [
  {
    id: "cosmic-explorer",
    title: "Cosmic Explorer",
    description: "A space visualization tool that allows users to explore the cosmos through an interactive 3D interface.",
    image: "/window.svg",
    tags: ["React", "Three.js", "WebGL"],
  },
  {
    id: "quantum-dashboard",
    title: "Quantum Dashboard",
    description: "An analytics dashboard with real-time data processing and visualization capabilities for complex datasets.",
    image: "/window.svg",
    tags: ["TypeScript", "D3.js", "Node.js"],
  },
  {
    id: "nebula-network",
    title: "Nebula Network",
    description: "A social platform connecting space enthusiasts, researchers, and astronomers to share discoveries and collaborate.",
    image: "/window.svg",
    tags: ["React", "GraphQL", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="planet w-12 h-12 mr-4"></div>
            <h1 className="text-3xl font-bold space-glow">COSMIC BLUEPRINT</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="/#about" className="hover:text-[var(--accent-primary)] transition-colors">About</Link></li>
            <li><Link href="/projects" className="text-[var(--accent-primary)] transition-colors">Projects</Link></li>
            <li><Link href="/#contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Projects Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 space-glow">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="blueprint-card rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-70 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`${project.title} icon`}
                    width={48}
                    height={48}
                    style={{ filter: "invert(1)" }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-[var(--accent-primary)] bg-opacity-20">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] text-sm font-bold flex items-center"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-[var(--accent-primary)] border-opacity-30">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
            <Image
              src="/globe.svg"
              alt="Social icon"
              width={24}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </a>
          <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
            <Image
              src="/file.svg"
              alt="Social icon"
              width={24}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </a>
          <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
            <Image
              src="/window.svg"
              alt="Social icon"
              width={24}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Cosmic Blueprint. All rights reserved.
        </p>
      </footer>
    </div>
  );
}