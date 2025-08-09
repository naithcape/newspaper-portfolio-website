export function DevelopmentPage() {
  return (<>
        <section className="mb-8">
          <p className="kicker mb-2">Development Desk</p>
          <h1 className="headline text-4xl md:text-5xl mb-1">Projects, Notes & Tools</h1>
          <p className="byline">Updated by Nenad Petrović - 09.08.2025</p>
          <hr className="rule my-3" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <img
              className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
              src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg"
              alt="Developer desk with laptop and code"
              loading="lazy"
            />
            <h2 className="headline text-2xl md:text-3xl mb-1">Development at finest</h2>
            <p className="byline mb-4">2021 - </p>
            <p className="lead drop-cap mb-3 hyphens-auto">
              Full-stack web developer specializing in building scalable, high-performance applications.
              I deliver clean, user-centric solutions that align with client goals and prioritize efficiency and security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <section>
                <p className="section-label mb-2">Highlights</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Built agency and internal systems.</li>
                  <li>Developed open-source projects.</li>
                  <li>Contributed to other projects.</li>
                </ul>
              </section>
              <section>
                <p className="section-label mb-2">Stack</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Kiru + Tailwind</li>
                  <li>Ruby On Rails with PostgreSQL</li>
                </ul>
              </section>
            </div>

            <section className="mt-8">
              <p className="section-label mb-3">Notes</p>
              <div className="news-columns">
                <p>
                  Start every project by defining clear performance goals.
                  Regularly measure key user experience metrics and integrate these checks into your development workflow.
                </p>
                <p>
                  Error boundaries are product features. Treat failure paths as part of the design system with copy, motion, and affordances.
                </p>
              </div>
            </section>
          </article>

          <aside className="lg:col-span-4">
            <p className="section-label mb-3">Toolkit</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Kiru, Tailwind</li>
              <li>Ruby On Rails</li>
              <li>PostgreSQL</li>
              <li>Jetbrains</li>
            </ul>
          </aside>
        </div>
    </>
  )
}