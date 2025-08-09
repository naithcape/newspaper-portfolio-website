export function BooksPage() {

  return (
    <>
      <section className="mb-8">
        <p className="kicker mb-2">Additional</p>
        <h1 className="headline text-4xl md:text-5xl mb-1">Books</h1>
        <p className="byline">On the shelf</p>
        <hr className="rule my-3" />
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <img
            className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
            src="https://images.pexels.com/photos/7063757/pexels-photo-7063757.jpeg"
            alt="Books on a shelf"
            loading="lazy"
          />
          <p className="lead drop-cap mb-3 hyphens-auto">
            Highlights from books that shaped my thinking across technology, design, and life. These notes focus on ideas that transfer —
            principles you can reuse the next day at work.
          </p>

          <section className="mt-6">
            <p className="section-label mb-2">Top Picks</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article>
                <h3 className="font-semibold mb-1">Critique of Pure Reason</h3>
                <p className="text-sm text-gray-600">Immanuel Kant • Philosophy</p>
                <p>Foundational work on knowledge and experience; dense but rewarding.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">The Art of Simple Living</h3>
                <p className="text-sm text-gray-600">Shunmyo Masuno • Lifestyle</p>
                <p>Lightweight, practical reflections to revisit every few months.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Notes from Underground</h3>
                <p className="text-sm text-gray-600">Fyodor Dostoevsky • Fiction</p>
                <p>Psychological depth and paradox; a compact existential mirror.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Socratic Dialogues</h3>
                <p className="text-sm text-gray-600">Plato • Philosophy</p>
                <p>Questions as engines of clarity; a model for rigorous inquiry.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">The Book of Questions</h3>
                <p className="text-sm text-gray-600">Pablo Neruda • Poetry</p>
                <p>Playful, open‑ended prompts that prime curiosity and reflection.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Man’s Search for Meaning</h3>
                <p className="text-sm text-gray-600">Viktor E. Frankl • Psychology</p>
                <p>On purpose and resilience; concise and frequently re‑readable.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Socratic Questioning for Therapists and Counselors</h3>
                <p className="text-sm text-gray-600">Scott H. Waltman et al. • Practice</p>
                <p>Structured questioning to surface assumptions and alternatives.</p>
              </article>
            </div>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">Recommended</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article>
                <h3 className="font-semibold mb-1">The Pragmatic Programmer</h3>
                <p className="text-sm text-gray-600">Andrew Hunt & David Thomas • Craft</p>
                <p>Timeless heuristics for sustainable pace and quality.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Atomic Habits</h3>
                <p className="text-sm text-gray-600">James Clear • Process</p>
                <p>Environment design beats willpower; build systems, not goals.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Range</h3>
                <p className="text-sm text-gray-600">David Epstein • Thinking</p>
                <p>Generalists thrive by borrowing mental models across domains.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Thinking, Fast and Slow</h3>
                <p className="text-sm text-gray-600">Daniel Kahneman • Psychology</p>
                <p>Biases and decision‑making models with everyday impact.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Design of Everyday Things</h3>
                <p className="text-sm text-gray-600">Don Norman • Design</p>
                <p>Affordances, feedback, and errors as design constraints.</p>
              </article>
              <article>
                <h3 className="font-semibold mb-1">Deep Work</h3>
                <p className="text-sm text-gray-600">Cal Newport • Focus</p>
                <p>Protect attention; measure outcomes, not activity.</p>
              </article>
            </div>
          </section>

          <section className="mt-6">
            <p className="section-label mb-2">Notes</p>
            <div className="news-columns">
              <p>Reading with a pencil changes everything. Mark questions, summarize chapters in your own words, and log ideas to test.</p>
              <p>Mix depth and breadth: one deep technical book per quarter, one craft/process book per month.</p>
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <p className="section-label mb-2">All‑time Favorites</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>The Art of Simple Living</li>
            <li>Atomic Habits</li>
          </ul>
        </aside>
      </div>
    </>
  )
}
