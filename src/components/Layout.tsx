import { Footer } from "./Footer.tsx"
import { ThemeToggleButton } from "./ThemeToggleButton.tsx"

interface LayoutProps {
  children: any
}

export function Layout({ children }: LayoutProps) {
  const isHome = typeof window !== 'undefined' && window.location.pathname === '/'
  const now = new Date()
  const dateStr = now.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })
  const timeStr = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Berlin' })
  function lastSundayOfMonthUTC(year: number, monthIndex: number) {
    const date = new Date(Date.UTC(year, monthIndex + 1, 0))
    const day = date.getUTCDay()
    date.setUTCDate(date.getUTCDate() - day)
    return date
  }
  function isCest(d: Date) {
    const y = d.getUTCFullYear()
    const start = lastSundayOfMonthUTC(y, 2)
    start.setUTCHours(1, 0, 0, 0)
    const end = lastSundayOfMonthUTC(y, 9)
    end.setUTCHours(1, 0, 0, 0)
    return d.getTime() >= start.getTime() && d.getTime() < end.getTime()
  }
  const tzLabel = isCest(now) ? 'CEST' : 'CET'
  const dateWithTime = `${dateStr} • ${timeStr} ${tzLabel}`


  return (
    <div className="min-h-screen flex flex-col bg-newsprint">
      {isHome ? (
        <main className="flex-grow">
          {children}
        </main>
      ) : (
        <main className="flex-grow">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-6xl mx-auto paper rounded-sm">
              <header className="px-6 md:px-10 pt-8">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{dateWithTime}</span>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span>Naithcape.com</span>
                    <ThemeToggleButton />
                  </div>
                </div>
                <h1 className="headline text-5xl md:text-7xl text-center mt-2">Naithcape</h1>
                <p className="text-center text-sm text-gray-600">Exploring technology, creativity, and passion</p>
                <hr className="rule my-3" />
                <nav className="newspaper-nav flex flex-wrap justify-center gap-x-6 gap-y-2 pb-4">
                  <a href="/">Home</a>
                  <a href="/events">Events</a>
                  <a href="/music">Music</a>
                  <a href="/racing">Racing</a>
                  <a href="/development">Development</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                </nav>
              </header>

              <div className="px-6 md:px-10 pb-10">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </main>
      )}
    </div>
  )
}