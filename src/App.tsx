import { Layout } from "./components/Layout.tsx"
import { HomePage } from "./pages/HomePage"
import { EventsPage } from "./pages/EventsPage"
import { MusicPage } from "./pages/MusicPage"
import { RacingPage } from "./pages/RacingPage"
import { DevelopmentPage } from "./pages/DevelopmentPage"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { AdvicesPage } from "./pages/content/AdvicesPage"
import { LearningPage } from "./pages/content/LearningPage"
import { ResourcesPage } from "./pages/content/ResourcesPage"
import { BooksPage } from "./pages/content/BooksPage"
import { TravelPage } from "./pages/content/TravelPage"
import { useSignal } from "kiru"

export function App() {
  const currentPath = useSignal(window.location.pathname)

  window.addEventListener('popstate', () => {
    currentPath.value = window.location.pathname
    window.scrollTo(0, 0)
  })

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    currentPath.value = path
    window.scrollTo(0, 0)
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a')
    if (anchor && anchor.href.startsWith(window.location.origin) && !anchor.target) {
      e.preventDefault()
      navigate(anchor.pathname)
    }
  })

  const renderPage = () => {
    const path = currentPath.value
    switch (path) {
      case '/':
        return <HomePage />
      case '/events':
        return <EventsPage />
      case '/music':
        return <MusicPage />
      case '/racing':
        return <RacingPage />
      case '/development':
        return <DevelopmentPage />
      case '/about':
        return <AboutPage />
      case '/contact':
        return <ContactPage />
      case '/content/advices':
        return <AdvicesPage />
      case '/content/learning':
        return <LearningPage />
      case '/content/resources':
        return <ResourcesPage />
      case '/content/books':
        return <BooksPage />
      case '/content/travel':
        return <TravelPage />
      default:
        return <HomePage />
    }
  }

  return (
    <Layout>
      {renderPage()}
    </Layout>
  )
}
