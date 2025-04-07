export default function ProjectLoading() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center">
      <div className="planet w-24 h-24 mb-8 animate-pulse"></div>
      <h1 className="text-4xl font-bold mb-4 space-glow">Loading Project...</h1>
      <p className="text-xl opacity-80 mb-8 text-center max-w-md">
        Preparing to launch into project space.
      </p>
      <div className="w-32 h-1 bg-[var(--accent-primary)] rounded-full overflow-hidden">
        <div className="h-full bg-[var(--accent-secondary)] animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}