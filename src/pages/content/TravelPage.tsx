export function TravelPage() {

  return (
    <>
      <section className="mb-8">
        <p className="kicker mb-2">Additional</p>
        <h1 className="headline text-4xl md:text-5xl mb-1">Travel</h1>
        <p className="byline">Journeys & notes</p>
        <hr className="rule my-3" />
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <img
            className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="View from a hill over a city"
            loading="lazy"
          />
          <p className="lead drop-cap mb-3 hyphens-auto">
            Travel sharpens attention. These are light guides and notes from places that reshaped my sense of pace, space, and food.
            Meant for walking, lingering, and noticing.
          </p>

          <section className="mt-6">
            <p className="section-label mb-2">Field Notes</p>
            <div className="news-columns">
              <p>Walk first, then plan. An unhurried loop around a neighborhood reveals more than any list. Ask a local where they’d take a
                friend with one day in town — that answer beats rankings.</p>
              <p>Eat where the line is mostly locals. Pick one museum or one district per day. Leave room for a detour; that’s where the
                memory lives.</p>
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <p className="section-label mb-3">Essentials</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Carry‑on only: layers, neutral palette, comfortable shoes.</li>
            <li>Offline maps and pinned spots in advance.</li>
            <li>Reusable bottle, small notebook, lightweight backpack.</li>
          </ul>
        </aside>
      </div>
    </>
  )
}
