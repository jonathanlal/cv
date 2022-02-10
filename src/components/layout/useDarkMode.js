import { useState, useEffect } from 'react'

export const isBrowser = () => typeof window !== "undefined"

export const useDarkMode = () => {
  let websiteTheme
  if (isBrowser()) {
    websiteTheme = window.__theme
  }
  const [theme, setTheme] = useState(websiteTheme)

  const toggleTheme = () => {
    window.__setPreferredTheme(websiteTheme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])
  return [theme, toggleTheme]
}
