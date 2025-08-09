export function AboutPage() {
  return (<>
        <section className="mb-8">
          <p className="kicker mb-2">About</p>
          <h1 className="headline text-4xl md:text-5xl mb-1">Background, Values & Work</h1>
          <p className="byline">Updated by Nenad Petrović - 09.08.2025</p>
          <hr className="rule my-3" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <img
              className="w-full aspect-[16/9] object-cover border border-[#e6e1d8] news-img mb-4"
              src="https://i.ibb.co/PvTWhKpg/webbanner.png"
              alt="Workspace desk"
              loading="lazy"
            />
            <p className="lead drop-cap mb-3 hyphens-auto">
              Entrepreneur and creative who’s started a few companies, mostly building tools and solutions for agencies and clients. It all began in 2014 when I got into music production just for fun. Between 2016 and 2020, I worked as a ghost music producer, helping others bring their projects to life.
            </p>
            <div className="news-columns">
              <p>
                In 2020, I switched things up and started learning graphic design and web development, finishing up in 2021. Mixing design with tech gave me the skills to make things that look good and work well. It also opened up new ways to solve problems and create useful tools. I always try to keep things clear and fast.              </p>
              <br/>
              <p>
                Lately, I’ve taken a break from music to focus on my other big passion — cars and racing. I’ve traveled a lot, getting involved with the racing community and learning how discipline and practice make all the difference. Now, I bring together everything I’ve learned to create projects that inspire and connect people.              </p>
              <p className="text-sm text-gray-600 mt-2">
                For the curious: scattered <a href="/content/advices" className="no-underline hover:underline decoration-dotted underline-offset-2 text-inherit hover:text-sky-600 transition-colors">advices</a>, ongoing <a href="/content/learning" className="no-underline hover:underline decoration-dotted underline-offset-2 text-inherit hover:text-sky-600 transition-colors">learning</a>, useful <a href="/content/resources" className="no-underline hover:underline decoration-dotted underline-offset-2 text-inherit hover:text-sky-600 transition-colors">resources</a>, favorite <a href="/content/books" className="no-underline hover:underline decoration-dotted underline-offset-2 text-inherit hover:text-sky-600 transition-colors">books</a>, and occasional <a href="/content/travel" className="no-underline hover:underline decoration-dotted underline-offset-2 text-inherit hover:text-sky-600 transition-colors">travel</a> notes.
              </p>
            </div>

            <section className="mt-8">
              <p className="section-label mb-2">Values</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Innovation with restraint: solve real problems, prefer simple tools.</li>
                <li>Continuous learning: improve processes as much as products.</li>
                <li>Community: share work, teach, and collaborate generously.</li>
              </ul>
            </section>

            <section className="mt-8">
              <p className="section-label mb-2">Education & Certifications</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>2020–2021 — AppBrewery Full Stack Web Developer Certificate</li>
                <li>2023 — CS50's Web Programming with Python and JavaScript</li>
              </ul>
            </section>
          </article>

          <aside className="lg:col-span-4">
            <p className="section-label mb-3">At a Glance</p>
            <dl className="grid grid-cols-2 text-sm gap-x-4 gap-y-2">
              <dt className="text-gray-600">Role</dt><dd>Entrepreneur</dd>
              <dt className="text-gray-600">Base</dt><dd>Belgrade, Serbia</dd>
              <dt className="text-gray-600">Email</dt><dd><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></dd>
            </dl>

            <hr className="rule my-4" />

            <p className="section-label mb-2">Links</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><a href="http://github.com/naithcape">GitHub</a></li>
              <li><a href="https://linkedin.com/in/naithcape">LinkedIn</a></li>
            </ul>
          </aside>
        </div>
    </>)
}