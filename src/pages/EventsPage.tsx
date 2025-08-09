export function EventsPage() {

  return (<>

        <section className="mb-8">
          <p className="kicker mb-2">Events Desk</p>
          <h1 className="headline text-4xl md:text-5xl mb-1">Upcoming & Past Events</h1>
          <p className="byline">Updated by Nenad Petrović - 09.08.2025</p>
          <hr className="rule my-3" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <img
              className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
              src="https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg"
              alt="Crowd at an event"
              loading="lazy"
            />
            <p className="lead drop-cap mb-3 hyphens-auto">
              Explore the calendar of gatherings across technology, music, and racing. Below you’ll find a curated list of
              upcoming appearances.
            </p>
            <p className="mb-3">
              Dates may shift; check always when is last time updated.
            </p>

            <section className="mt-8">
              <p className="section-label mb-3">Upcoming Events</p>
              <p className="text-sm text-blue-400">Stay tuned for upcoming updates with all the info you need about the events.</p>
              {/*
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-600 mt-1">October 2025 • Brasil</p>
                  <h3 className="font-semibold mb-1">Landing in Brasil.</h3>
                  <p className="text-sm text-blue-400">October 04, 2025</p>
                  <p className="mt-1">I’ll be landing in Brasil and then heading straight to the hotel to get settled.
                    Planning to take a little vacation afterward—just some time to relax, enjoy the surroundings,
                    and recharge before getting back to everything else.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 mt-1">Ocrober 2025 • Brasil</p>
                  <h3 className="font-semibold mb-1">Racing Championship — National Circuit</h3>
                  <p className="text-sm text-blue-400">November 08 to 22, 2025 • Circuit Speedway, New York</p>
                  <p className="mt-1">Season finale — setup notes and telemetry preview.</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mt-1">Ocrober 2025 • Brasil</p>
                  <h3 className="font-semibold mb-1">Electronic Music Festival — Live Set</h3>
                  <p className="text-sm text-blue-400">Dec 5, 2025 • Harmony Hall, Los Angeles</p>
                  <p className="mt-1">Ambient/modern classical program with new material.</p>
                </div>
              </div>
*/}
            </section>
          </article>

          <aside className="lg:col-span-4">
            <p className="section-label mb-3">Event Briefs</p>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-blue-400 mb-1">Traveling to Brasil.</h3>
                <p>Adventure and culture await—stay tuned for updates.</p>
                <p className="text-xs text-gray-600 mt-1">October 2025 • Brasil</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 mb-1">Traveling to Spain.</h3>
                <p>Adventure and culture await—stay tuned for updates.</p>
                <p className="text-xs text-gray-600 mt-1">December 2025 • Spain</p>
              </div>
            </div>
          </aside>
        </div>
    </>
  )
}