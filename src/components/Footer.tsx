export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer aria-label="Site footer" className="px-6 md:px-10 pb-10">
      <hr className="rule my-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section>
          <p className="kicker mb-2">About</p>
          <p className="text-sm text-gray-700">
            Naithcape shares projects and notes across events, music, racing, and development with a
            timeless, print‑inspired layout.
          </p>
        </section>

        <nav aria-label="Sections">
          <p className="kicker mb-2">Sections</p>
          <ul className="space-y-1">
            <li><a href="/events">Events</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="/racing">Racing</a></li>
            <li><a href="/development">Development</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

        <section>
          <p className="kicker mb-2">Contact</p>
          <ul className="space-y-1">
            <li><a href="/contact">Contact page</a></li>
            <li><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></li>
          </ul>
        </section>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-600">
        <p>&copy; {year} Naithcape.com</p>
        <p>All content provided as-is.</p>
      </div>
    </footer>
  )
}
