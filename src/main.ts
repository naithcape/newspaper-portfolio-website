import "./global.css"
import { mount } from "kiru"
import { App } from "./App"

const root = document.querySelector<HTMLDivElement>("#app")!
mount(App, root)

// Animate items with .fade-up when they enter the viewport
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const el = entry.target as HTMLElement
    if (entry.isIntersecting) {
      el.classList.add("in-view")
      io.unobserve(el)
    }
  }
}, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" })

const watchFadeUps = () => {
  document.querySelectorAll<HTMLElement>(".fade-up").forEach((el) => {
    if (!el.classList.contains("in-view")) {
      io.observe(el)
    }
  })
}

// Initial scan
watchFadeUps()

// Observe updates under #app so new content gets animated
const mo = new MutationObserver(() => watchFadeUps())
mo.observe(root, { childList: true, subtree: true })
