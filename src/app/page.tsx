import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center">
          <div className="planet w-12 h-12 mr-4"></div>
          <h1 className="text-3xl font-bold space-glow">COSMIC BLUEPRINT</h1>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-[var(--accent-primary)] transition-colors">About</a></li>
            <li><Link href="/projects" className="hover:text-[var(--accent-primary)] transition-colors">Projects</Link></li>
            <li><a href="#contact" className="hover:text-[var(--accent-primary)] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-24">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-5xl font-bold mb-6 space-glow">
            Exploring the <span className="text-[var(--accent-primary)]">Universe</span> of Andre
          </h2>
          <p className="text-xl mb-8 opacity-80">
            Oh my god I can do <span className="text-[var(--accent-primary)]">ANYTHING</span>
          </p>
          <div className="flex space-x-4">
            <Link href="/projects" className="cosmic-button">View Projects</Link>
            <a href="#contact" className="border border-[var(--accent-primary)] px-4 py-2 rounded-md hover:bg-[var(--accent-primary)] hover:bg-opacity-20 transition-all">Contact Me</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="planet w-64 h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/globe.svg"
                alt="Planet icon"
                width={100}
                height={100}
                className="opacity-70"
                style={{ filter: "invert(1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-24">
        <h2 className="text-3xl font-bold mb-8 space-glow">About Me</h2>
        <div className="blueprint-card p-6 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-8">
              <p className="mb-4">
                I have too much power with vibe coding
              </p>
              <p className="mb-4">
                With expertise in modern web technologies and a keen eye for design, I craft experiences that are
                both functional and beautiful. I believe in continuous learning and pushing the boundaries of what&apos;s possible.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <h3 className="text-[var(--accent-primary)] font-bold mb-2">Skills</h3>
                  <ul className="list-disc list-inside opacity-80">
                    <li>Frontend Development</li>
                    <li>UI/UX Design</li>
                    <li>Backend Systems</li>
                    <li>Cloud Architecture</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[var(--accent-primary)] font-bold mb-2">Technologies</h3>
                  <ul className="list-disc list-inside opacity-80">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Cloud Platforms</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center items-center">
              <div className="blueprint-card p-4 rounded-lg w-full max-w-xs">
                <div className="text-center">
                  <div className="inline-block p-1 border border-[var(--accent-primary)] rounded-full mb-4">
                    <Image
                      src="/vercel.svg"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="rounded-full"
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-sm opacity-80 mb-4">Full Stack Developer</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
                      GitHub
                    </a>
                    <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
                      LinkedIn
                    </a>
                    <a href="#" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h2 className="text-3xl font-bold mb-8 space-glow">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
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
          ].map((project) => (
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
                <Link href={`/projects/${project.id}`} className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] text-sm font-bold flex items-center">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="cosmic-button">View All Projects</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-24">
        <h2 className="text-3xl font-bold mb-8 space-glow">Contact Me</h2>
        <div className="blueprint-card p-6 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
              <p className="mb-6">
                Interested in working together or have a question? Feel free to reach out through any of the channels below
                or fill out the contact form.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] bg-opacity-20 flex items-center justify-center mr-4">
                    <Image
                      src="/file.svg"
                      alt="Email icon"
                      width={20}
                      height={20}
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm opacity-80">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] bg-opacity-20 flex items-center justify-center mr-4">
                    <Image
                      src="/globe.svg"
                      alt="Location icon"
                      width={20}
                      height={20}
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-sm opacity-80">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[var(--background)] border border-[var(--accent-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-[var(--background)] border border-[var(--accent-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 bg-[var(--background)] border border-[var(--accent-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="cosmic-button w-full">Send Message</button>
              </form>
            </div>
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
