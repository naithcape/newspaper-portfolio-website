import { useSignal } from "kiru"

export function ThemeToggleButton() {
  const theme = useSignal(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

  const setTheme = (t: 'light' | 'dark') => {
    const root = document.documentElement
    if (t === 'dark') { root.classList.add('dark'); root.style.setProperty('color-scheme', 'dark') }
    else { root.classList.remove('dark'); root.style.setProperty('color-scheme', 'light') }
    localStorage.setItem('theme', t)
    theme.value = t
  }

  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

  return (
    <button
      type="button"
      onclick={toggleTheme}
      aria-pressed={theme.value === 'dark'}
      aria-label={theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-sm border transition-colors bg-white text-gray-800 border-[#e6e1d8] hover:bg-gray-50 hover:border-gray-300 dark:bg-slate-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-slate-700/80 dark:hover:border-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-1 ring-offset-white dark:ring-offset-slate-900"
    >
      {theme.value === 'dark' ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/><path fillRule="evenodd" d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm10-6a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM7 12a1 1 0 01-1 1H4a1 1 0 110-2h2a1 1 0 011 1zm11.657-6.657a1 1 0 010 1.414L17.414 7.0a1 1 0 11-1.414-1.414l1.243-1.243a1 1 0 011.414 0zM8.0 16.586a1 1 0 010 1.414L6.757 19.243a1 1 0 11-1.414-1.414L6.586 16.586a1 1 0 011.414 0zM19.243 17.657a1 1 0 01-1.414 0L16.586 16.0a1 1 0 111.414-1.414l1.243 1.243a1 1 0 010 1.414zM7.414 6.0a1 1 0 010 1.414L6.171 8.657A1 1 0 114.757 7.243L6.0 6.0A1 1 0 017.414 6.0z" clipRule="evenodd"/></svg>
          <span>Light</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M21.64 13.0A9 9 0 1111 2.36 7 7 0 0021.64 13z"/></svg>
          <span>Dark</span>
        </>
      )}
    </button>
  )
}
