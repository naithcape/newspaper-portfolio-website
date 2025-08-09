export function AdvicesPage() {

  return (
    <>
      <section className="mb-8">
        <p className="kicker mb-2">Additional</p>
        <h1 className="headline text-4xl md:text-5xl mb-1">Advices</h1>
        <p className="byline">Quiet notes and practical tips</p>
        <hr className="rule my-3" />
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <img
            className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
            alt="Notebook with checklist"
            loading="lazy"
          />
          <p className="lead drop-cap mb-3 hyphens-auto">
            A small corner for pragmatic guidance collected from building software, making music, and running events. These are the
            habits and heuristics I reach for when momentum matters.
          </p>

          <section className="mt-6">
            <p className="section-label mb-2">Workflows</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Reduce scope until it ships: pick one outcome, one audience, one deadline.</li>
              <li>Work in passes: structure → implement → refine. Don’t polish too early.</li>
              <li>Make state visible: logs, checklists, and dashboards beat memory.</li>
              <li>Name the unknowns: write questions down, then timebox the answers.</li>
            </ul>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">Craft & Code</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Prefer boring technology for critical paths; innovate at the edges.</li>
              <li>Write code like an article: clear headline, short paragraphs, helpful captions (comments).</li>
              <li>Delete to improve: remove config, branches, and features that don’t earn their keep.</li>
              <li>Latency is a feature. Measure before you guess.</li>
            </ul>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">Communication</p>
            <div className="news-columns">
              <p>Write short, specific updates: goal, status, next step. Link details instead of pasting them everywhere.</p>
              <p>Prefer prototypes when words fail. A clickable mock beats a thousand messages.</p>
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <p className="section-label mb-3">Quick Tips</p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">One Inbox Policy</h3>
              <p>Pipe notifications into a single place; schedule processing, not reacting.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Budget Breaks</h3>
              <p>Set a 50/10 timer: 50 minutes focused, 10 minutes off screen.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Definition of Done</h3>
              <p>Shipped, documented, measured. Anything less is still in progress.</p>
            </div>
          </div>

          <hr className="rule my-4" />

          <p className="section-label mb-2">Checklists</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>README updated and example added</li>
            <li>Edge cases covered and monitored</li>
            <li>Decision log: why this approach</li>
          </ul>
        </aside>
      </div>
    </>
  )
}
