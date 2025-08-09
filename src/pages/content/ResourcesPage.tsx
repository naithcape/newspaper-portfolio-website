export function ResourcesPage() {

  return (
    <>
      <section className="mb-8">
        <p className="kicker mb-2">Additional</p>
        <h1 className="headline text-4xl md:text-5xl mb-1">Resources</h1>
        <p className="byline">Tools, links, and references</p>
        <hr className="rule my-3" />
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <img
            className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
            src="https://images.pexels.com/photos/1117153/pexels-photo-1117153.jpeg"
            alt="Workspace with tools"
            loading="lazy"
          />
          <p className="lead drop-cap mb-3 hyphens-auto">
            Curated links and tools I return to when building, learning, and shipping. Practical, lightweight, and well‑documented
            resources beat novelty nine times out of ten.
          </p>

          <section className="mt-6">
            <p className="section-label mb-2">Tooling</p>
            <ul className="list-disc list-inside space-y-1">
              <li>TypeScript — strong types, clear contracts, safer refactors.</li>
              <li>Vite — fast dev server and sensible build defaults.</li>
              <li>Tailwind — utility‑first styling with consistency and speed.</li>
              <li>ESLint & Prettier — keep style and quality automatic.</li>
            </ul>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">Learning</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article>
                <h3 className="font-semibold mb-1">Systems & Architecture</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><a href="https://martinfowler.com/" target="_blank" rel="noreferrer">Martin Fowler</a></li>
                  <li><a href="https://aws.amazon.com/builders-library/" target="_blank" rel="noreferrer">AWS Builders' Library</a></li>
                </ul>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Web Fundamentals</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
                  <li><a href="https://web.dev/" target="_blank" rel="noreferrer">web.dev</a></li>
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">References</p>
            <div className="news-columns">
              <p>Prefer canonical docs and small examples. When evaluating a new tool, look for a quickstart, a migration guide, and a
                clear statement of scope. If those are missing, reconsider.</p>
              <p>Keep private notes on gotchas and defaults. The real speedup is avoiding the same pitfalls twice.</p>
            </div>
          </section>

        </article>

        <aside className="lg:col-span-4">
          <p className="section-label mb-3">Handy Links</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><a href="https://regex101.com/" target="_blank" rel="noreferrer">Regex101</a></li>
            <li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">Can I Use</a></li>
            <li><a href="https://transform.tools/" target="_blank" rel="noreferrer">transform.tools</a></li>
          </ul>

          <hr className="rule my-4" />

          <p className="section-label mb-2">Starter Kits</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>SPA template with TypeScript and Tailwind</li>
            <li>API server with sensible defaults</li>
          </ul>

          <hr className="rule my-4" />

          <p className="section-label mb-2">Cheatsheets</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>HTTP status codes at a glance</li>
            <li>Keyboard shortcuts for your editor</li>
            <li>A11y color contrast quickcheck</li>
          </ul>
        </aside>
      </div>
    </>
  )
}
