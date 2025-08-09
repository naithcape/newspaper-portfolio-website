export function MusicPage() {
  return (<>
        <section className="mb-8">
          <p className="kicker mb-2">Music Desk</p>
          <h1 className="headline text-4xl md:text-5xl mb-1">Works, Releases & Notes</h1>
          <p className="byline">Updated by Nenad Petrović - 09.08.2025</p>
          <hr className="rule my-3" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <img
              className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
              src="https://images.pexels.com/photos/10653499/pexels-photo-10653499.jpeg"
              alt="Studio desk with instruments"
              loading="lazy"
            />
            <h2 className="headline text-2xl md:text-3xl mb-1">Album: Back Like I Never Left</h2>
            <p className="byline mb-4">Releasing September 2025</p>
            <p className="lead drop-cap mb-3 hyphens-auto">
              The debut album delves into the journey of where I’ve been over the years, the reasons behind the absence,
              the events that shaped the path, what listeners can expect in the future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <section>
                <p className="section-label mb-2">Tracklist</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Back Like I Never Left — 2:40</li>
                  <li>Count Me Out — 2:34</li>
                  <li>Forever — 2:54</li>
                  <li>Ghetto Party — 2:58</li>
                  <li>No Brakes in a Bimmer — 2:19</li>
                  <li>About to be Again — 2:34</li>
                  <li>Boom Drive — 1:57</li>
                  <li>Chap — 2:46</li>
                  <li>Spring — 3:24</li>
                  <li>Ride to Remember — 3:50</li>
                  <li>Nightparty — 2:58</li>
                  <li>Spinnin — 4:05</li>
                  <li>Throtle Therapy — 3:18</li>
                </ol>
              </section>
            </div>

            {/*
            <section className="mt-8">
              <p className="section-label mb-3">Catalog</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article>
                  <img
                    className="w-full aspect-[4/3] object-cover border border-[#e6e1d8] news-img mb-2"
                    src="https://i.ibb.co/xZTtmmQ/logo-tranparent-black.png"
                    alt="Vinyl crate"
                    loading="lazy"
                  />
                  <h3 className="font-semibold">Urban Dreams</h3>
                  <p className="text-sm">Released March 2024</p>
                </article>
                <article>
                  <img
                    className="w-full aspect-[4/3] object-cover border border-[#e6e1d8] news-img mb-2"
                    src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1200&auto=format&fit=crop"
                    alt="Piano keys"
                    loading="lazy"
                  />
                  <h3 className="font-semibold">Nature's Symphony</h3>
                  <p className="text-sm">Released November 2023</p>
                </article>
                <article>
                  <img
                    className="w-full aspect-[4/3] object-cover border border-[#e6e1d8] news-img mb-2"
                    src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop"
                    alt="Guitar on stand"
                    loading="lazy"
                  />
                  <h3 className="font-semibold">Digital Horizons</h3>
                  <p className="text-sm">Released July 2023</p>
                </article>
              </div>
            </section>
             */}
          </article>

          <aside className="lg:col-span-4">
            <p className="section-label mb-3">Live Sets & Briefs</p>
            <div className="space-y-5">
              <p className="text-sm text-blue-400">Stay tuned for upcoming updates with all the info you need about the music.</p>
              {/*
              <div>
                <h3 className="font-semibold mb-1">Ambient Room — Session IV</h3>
                <p>Live recording exploring long‑form drones and piano motifs.</p>
                <p className="text-xs text-gray-600 mt-1">May 2025 • Berlin</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Studio Notes</h3>
                <p>On microphone placement and reverb tails for intimate textures.</p>
                <p className="text-xs text-gray-600 mt-1">April 2025 • Los Angeles</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Collaboration Teaser</h3>
                <p>String quartet sketches arranged for modular rig.</p>
                <p className="text-xs text-gray-600 mt-1">TBA • Remote</p>
              </div>
              */}
            </div>
          </aside>
        </div>
    </>
  )
}