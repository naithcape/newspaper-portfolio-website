export function LearningPage() {

  return (
    <>
      <section className="mb-8">
        <p className="kicker mb-2">Additional</p>
        <h1 className="headline text-4xl md:text-5xl mb-1">Learning</h1>
        <p className="byline">Notes on continuous improvement</p>
        <hr className="rule my-3" />
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <img
            className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
            src="https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg"
            alt="Books and laptop for study"
            loading="lazy"
          />
          <p className="lead drop-cap mb-3 hyphens-auto">
            A living notebook of ongoing learning paths, experiments, and reflections. Momentum comes from small loops repeated with
            care — read, practice, reflect, share.
          </p>

          <section className="mt-6">
            <p className="section-label mb-2">Active Tracks</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Systems Design — queues, backpressure, idempotency, observability basics.</li>
              <li>TypeScript Mastery — stricter types, generics in UI patterns, DX ergonomics.</li>
              <li>Audio Engineering — mic technique, gain staging, spatial effects restraint.</li>
              <li>Data for Racing — telemetry review cadence, lap deltas, setup journals.</li>
            </ul>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">Reflections</p>
            <div className="news-columns">
              <p>Learning compounds when scoped: one concept practiced across three small projects beats a broad survey. Repetition
                makes recall automatic, freeing attention for nuance.</p>
              <p>Teaching others clarifies thought. Drafting notes forces me to name decisions and tradeoffs, which then feed back into
                better defaults the next time around.</p>
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <p className="section-label mb-3">Study Habits</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Daily 45‑minute focus block, device‑free.</li>
            <li>Weekly recap: what worked, what to change.</li>
            <li>Flashcards for core concepts, not trivia.</li>
          </ul>

          <hr className="rule my-4" />

          <p className="section-label mb-2">Currently Learning</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Event sourcing patterns</li>
            <li>Audio mixing for intimate textures</li>
            <li>Race data visualization</li>
          </ul>

          <hr className="rule my-4" />

          <p className="section-label mb-2">Milestones</p>
          <p className="text-sm">Drafting a small systems‑design glossary and a repeatable project brief template.</p>
        </aside>
      </div>
    </>
  )
}
