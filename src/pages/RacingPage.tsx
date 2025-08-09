export function RacingPage() {
  return (<>
        <section className="mb-8">
          <p className="kicker mb-2">Racing Desk</p>
          <h1 className="headline text-4xl md:text-5xl mb-1">Analysis, Events & Results</h1>
          <p className="byline">Updated by Nenad Petrović - 09.08.2025</p>
          <hr className="rule my-3" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <img
              className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
              src="https://images.pexels.com/photos/12330299/pexels-photo-12330299.jpeg"
              alt="Race car on track"
              loading="lazy"
            />
            <h2 className="headline text-2xl md:text-3xl mb-1">Gearing Up for Next Year</h2>
            <p className="byline mb-4">Season 2025 Notes</p>
            <p className="lead drop-cap mb-3 hyphens-auto">
              How new year approaches, the focus shifts from chasing fleeting highs to maintaining steady, sustainable progress.
              This journey is about valuing consistency and pacing oneself for long-term success rather than short bursts of intensity.
            </p>
            <p className="mb-3">
              It’s a commitment to growth, resilience, and mastering the rhythm that leads to lasting achievement.
              Get ready to embrace the challenge and make every step count.
            </p>

            <section className="mt-6">
              <p className="section-label mb-2">Upcoming Races</p>
              <div className="space-y-5">
                <p className="text-sm text-blue-400">Stay tuned for upcoming updates with all the info you need about the racing.</p>

                {/*   <div>
                  <h3 className="font-semibold mb-1">National Circuit Championship</h3>
                  <p className="text-sm">Oct 2025 • National Speedway, Los Angeles</p>
                  <p className="mt-1">Target: tire conservation through laps 10–18; alternate wing setting A2.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endurance Racing Series — 24H</h3>
                  <p className="text-sm">Aug 2025 • International Circuit, Miami</p>
                  <p className="mt-1">Stint plan in 4s; prioritize traffic management at T6–T8.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Club Sprint — Local Circuit</h3>
                  <p className="text-sm">Sep 2025 • Time Attack</p>
                  <p className="mt-1">Test revised aero balance and cold‑pressure baselines.</p>
                </div>*/}
              </div>
            </section>
          </article>

          <aside className="lg:col-span-4">
            <p className="section-label mb-3">Quick Stats</p>
            <dl className="grid grid-cols-2 text-sm gap-x-4 gap-y-2">
              <p className="text-sm text-blue-400">Stay tuned for upcoming updates with all the info you need about the racing.</p>
              {/*             <dt className="text-gray-600">Races</dt><dd>12</dd>
              <dt className="text-gray-600">Podiums</dt><dd>3</dd>
              <dt className="text-gray-600">Championships</dt><dd>1</dd>
              <dt className="text-gray-600">Fastest Lap</dt><dd>215 km/h</dd> */}
            </dl>
          </aside>
        </div>
    </>
  )
}