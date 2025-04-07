import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define project data
const projects = [
  {
    id: "cosmic-explorer",
    title: "Cosmic Explorer",
    description: "A space visualization tool that allows users to explore the cosmos through an interactive 3D interface.",
    fullDescription: `
      The Cosmic Explorer is a cutting-edge space visualization tool that brings the wonders of the universe to your fingertips. This interactive 3D interface allows users to navigate through stars, planets, and galaxies with intuitive controls and stunning visual fidelity.
      
      Built with React and Three.js, this application leverages WebGL to render complex astronomical data in real-time. Users can explore celestial bodies, view detailed information about cosmic phenomena, and even track the International Space Station's current position.
      
      Key features include:
      • Interactive 3D navigation of the known universe
      • Detailed information about stars, planets, and galaxies
      • Real-time tracking of satellites and space missions
      • Educational content about astronomical phenomena
      • Customizable viewing options for different celestial perspectives
    `,
    image: "/window.svg",
    tags: ["React", "Three.js", "WebGL"],
    challenges: "Rendering thousands of stars and celestial bodies while maintaining performance was a significant challenge. We implemented level-of-detail techniques and spatial partitioning to ensure smooth navigation even on less powerful devices.",
    solutions: "By utilizing WebWorkers for calculations and implementing efficient data structures, we were able to create a seamless experience that scales well across different devices.",
    screenshots: ["/window.svg", "/window.svg", "/window.svg"],
    technologies: ["React", "Three.js", "WebGL", "JavaScript", "HTML5", "CSS3"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: "quantum-dashboard",
    title: "Quantum Dashboard",
    description: "An analytics dashboard with real-time data processing and visualization capabilities for complex datasets.",
    fullDescription: `
      The Quantum Dashboard is a powerful analytics platform designed to process and visualize complex datasets in real-time. With its intuitive interface and powerful backend, it transforms raw data into actionable insights through interactive charts, graphs, and customizable widgets.
      
      Developed using TypeScript and D3.js, this dashboard provides a seamless experience for data analysts and business intelligence professionals. The Node.js backend ensures efficient data processing and real-time updates.
      
      Key features include:
      • Real-time data visualization with customizable widgets
      • Interactive charts and graphs with drill-down capabilities
      • Automated reporting and alert systems
      • Data filtering and advanced search functionality
      • Export options for reports and visualizations
    `,
    image: "/window.svg",
    tags: ["TypeScript", "D3.js", "Node.js"],
    challenges: "Handling large datasets and ensuring real-time updates without performance degradation required careful optimization of both frontend and backend components.",
    solutions: "We implemented data streaming techniques and efficient caching strategies to minimize latency and ensure smooth user experience even with rapidly changing data.",
    screenshots: ["/window.svg", "/window.svg", "/window.svg"],
    technologies: ["TypeScript", "D3.js", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: "nebula-network",
    title: "Nebula Network",
    description: "A social platform connecting space enthusiasts, researchers, and astronomers to share discoveries and collaborate.",
    fullDescription: `
      Nebula Network is a specialized social platform designed to connect space enthusiasts, researchers, and professional astronomers. It provides a dedicated space for sharing discoveries, collaborating on research, and discussing the latest developments in astronomy and space exploration.
      
      Built with React and GraphQL, this platform offers a modern and responsive user experience. The MongoDB backend ensures efficient data storage and retrieval for user profiles, posts, and collaborative projects.
      
      Key features include:
      • User profiles with specialization areas and research interests
      • Real-time collaboration tools for research projects
      • Discovery feed with customizable content filters
      • Event calendar for astronomical phenomena and conferences
      • Direct messaging and group discussions
    `,
    image: "/window.svg",
    tags: ["React", "GraphQL", "MongoDB"],
    challenges: "Creating a platform that serves both amateur enthusiasts and professional researchers required careful consideration of different user needs and technical expertise levels.",
    solutions: "We implemented adaptive interfaces that adjust based on user profiles and preferences, ensuring that both beginners and experts can find value in the platform.",
    screenshots: ["/window.svg", "/window.svg", "/window.svg"],
    technologies: ["React", "GraphQL", "Apollo", "MongoDB", "Node.js", "Express"],
    github: "#",
    liveDemo: "#",
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

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

      {/* Project Hero */}
      <section className="mb-16">
        <div className="flex items-center mb-4">
          <Link 
            href="/projects" 
            className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] text-sm font-bold flex items-center mr-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>
        
        <div className="blueprint-card rounded-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-70 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={`${project.title} icon`}
                width={96}
                height={96}
                style={{ filter: "invert(1)" }}
              />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 space-glow">{project.title}</h1>
            <p className="text-xl opacity-80 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full bg-[var(--accent-primary)] bg-opacity-20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.github} className="cosmic-button">View on GitHub</a>
              <a href={project.liveDemo} className="border border-[var(--accent-primary)] px-4 py-2 rounded-md hover:bg-[var(--accent-primary)] hover:bg-opacity-20 transition-all">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="mb-16">
        <div className="blueprint-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 space-glow">Project Overview</h2>
          <div className="whitespace-pre-line opacity-80">
            {project.fullDescription}
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="blueprint-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 space-glow">Challenges</h2>
            <p className="opacity-80">{project.challenges}</p>
          </div>
          <div className="blueprint-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 space-glow">Solutions</h2>
            <p className="opacity-80">{project.solutions}</p>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 space-glow">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="blueprint-card p-2 rounded-lg">
              <div className="aspect-video bg-[var(--background)] flex items-center justify-center">
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={300}
                  height={200}
                  style={{ filter: "invert(1)" }}
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 space-glow">Technologies Used</h2>
        <div className="blueprint-card p-8 rounded-lg">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-sm px-3 py-1 rounded-full bg-[var(--accent-primary)] bg-opacity-20">
                {tech}
              </span>
            ))}
          </div>
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