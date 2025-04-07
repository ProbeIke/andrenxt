import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center">
      <div className="planet w-24 h-24 mb-8"></div>
      <h1 className="text-4xl font-bold mb-4 space-glow">Project Not Found</h1>
      <p className="text-xl opacity-80 mb-8 text-center max-w-md">
        The project you're looking for seems to have drifted into deep space.
      </p>
      <Link href="/projects" className="cosmic-button">
        Return to Projects
      </Link>
    </div>
  );
}