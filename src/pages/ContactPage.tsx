{/* import { useSignal } from "kiru" */}

export function ContactPage() {
  {/* const name = useSignal("")
  const email = useSignal("")
  const subject = useSignal("")
  const message = useSignal("")
  const isSubmitted = useSignal(false)
  const isSubmitting = useSignal(false)
  const errorMessage = useSignal("")

  const handleSubmit = (e: Event) => {
    e.preventDefault()

    if (!name.value || !email.value || !message.value) {
      errorMessage.value = "Please fill out all required fields."
      return
    }
    if (!email.value.includes('@') || !email.value.includes('.')) {
      errorMessage.value = "Please enter a valid email address."
      return
    }

    errorMessage.value = ""
    isSubmitting.value = true

    setTimeout(() => {
      isSubmitting.value = false
      isSubmitted.value = true
      name.value = ""
      email.value = ""
      subject.value = ""
      message.value = ""
    }, 1200)
  }
*/}
  return (<>
        <section className="mb-8">
          <p className="kicker mb-2">Contact</p>
          <h1 className="headline text-4xl md:text-5xl mb-1">Send a Note</h1>
          <p className="byline">Editorial & General Inquiries</p>
          <hr className="rule my-3" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <p className="lead drop-cap mb-3 hyphens-auto">
              Have a question, want to collaborate, or book an appearance? Use the email or linkedin — I typically reply within one business day.
            </p>

            {/*    {isSubmitted.value ? (
              <div className="border border-[#e6e1d8] bg-white p-8 text-center">
                <h3 className="headline text-2xl mb-2">Message sent</h3>
                <p className="text-sm text-gray-600 mb-4">Thank you for reaching out. I’ll be in touch soon.</p>
                <button
                  onclick={() => isSubmitted.value = false}
                  className="inline-block border border-[#e6e1d8] px-4 py-2 bg-white hover:bg-gray-50"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onsubmit={handleSubmit} className="space-y-4">
                {errorMessage.value && (
                  <div className="border border-[#e6e1d8] bg-white p-3 text-red-700">
                    {errorMessage.value}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name.value}
                    oninput={(e) => name.value = (e.target as HTMLInputElement).value}
                    className="w-full p-2"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email.value}
                    oninput={(e) => email.value = (e.target as HTMLInputElement).value}
                    className="w-full p-2"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject.value}
                    oninput={(e) => subject.value = (e.target as HTMLInputElement).value}
                    className="w-full p-2"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message.value}
                    oninput={(e) => message.value = (e.target as HTMLTextAreaElement).value}
                    className="w-full p-2"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting.value}
                    className="inline-flex items-center gap-2 border border-[#e6e1d8] px-4 py-2 bg-white hover:bg-gray-50"
                  >
                    {isSubmitting.value ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
            */}
            <section className="mt-8">
              <p className="section-label mb-2">FAQ</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Freelance projects?</h4>
                  <p>Yes — availability varies; include scope and timeline in your note.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Response time</h4>
                  <p>Usually within 24 hours on weekdays.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Speaking</h4>
                  <p>Happy to discuss talks and workshops. Please share event details.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Consulting</h4>
                  <p>Limited slots for product and front‑end strategy.</p>
                </div>
              </div>
            </section>
          </article>

          <aside className="lg:col-span-4">
            <p className="section-label mb-3">Direct</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><a href="mailto:hey@naithcape.com">hey@naithcape.com</a></li>
              <li><a href="http://github.com/naithcape">GitHub</a> / <a href="https://linkedin.com/in/naithcape">LinkedIn</a></li>
            </ul>

            <hr className="rule my-4" />

            <p className="section-label mb-2">Working Hours</p>
            <ul className="text-sm space-y-1">
              <li>Mon–Fri • 09:00–18:00 CET/CEST</li>
              <li>Typical reply: within 1 business day</li>
            </ul>
          </aside>
        </div>
    </>)
}