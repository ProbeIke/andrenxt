export default function ProjectsLoading() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header Skeleton */}
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center">
          <div className="planet w-12 h-12 mr-4 animate-pulse"></div>
          <div className="h-8 w-48 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse"></div>
        </div>
        <nav>
          <div className="flex space-x-8">
            <div className="h-6 w-16 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse"></div>
            <div className="h-6 w-16 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse"></div>
            <div className="h-6 w-16 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse"></div>
          </div>
        </nav>
      </header>

      {/* Projects Section Skeleton */}
      <section className="mb-24">
        <div className="h-10 w-64 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="blueprint-card rounded-lg overflow-hidden">
              <div className="h-48 bg-[var(--accent-primary)] bg-opacity-20 animate-pulse"></div>
              <div className="p-6">
                <div className="h-7 w-3/4 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse mb-4"></div>
                <div className="h-16 bg-[var(--accent-primary)] bg-opacity-10 rounded animate-pulse mb-4"></div>
                <div className="flex space-x-2 mb-4">
                  <div className="h-6 w-16 bg-[var(--accent-primary)] bg-opacity-20 rounded-full animate-pulse"></div>
                  <div className="h-6 w-20 bg-[var(--accent-primary)] bg-opacity-20 rounded-full animate-pulse"></div>
                  <div className="h-6 w-14 bg-[var(--accent-primary)] bg-opacity-20 rounded-full animate-pulse"></div>
                </div>
                <div className="h-6 w-28 bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="text-center py-8 border-t border-[var(--accent-primary)] border-opacity-30">
        <div className="flex justify-center space-x-6 mb-4">
          <div className="h-6 w-6 bg-[var(--accent-primary)] bg-opacity-20 rounded-full animate-pulse"></div>
          <div className="h-6 w-6 bg-[var(--accent-primary)] bg-opacity-20 rounded-full animate-pulse"></div>
          <div className="h-6 w-6 bg-[var(--accent-primary)] bg-opacity-20 rounded-full animate-pulse"></div>
        </div>
        <div className="h-4 w-48 mx-auto bg-[var(--accent-primary)] bg-opacity-20 rounded animate-pulse"></div>
      </footer>
    </div>
  );
}