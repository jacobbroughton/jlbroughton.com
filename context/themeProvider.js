import { createContext, useContext, useState } from "react"
import { loadState } from "../utils/localStorage"

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({ children }) => {
  const initialValue = loadState("darkMode") 
  
  const [darkMode, setDarkMode] = useState(initialValue || false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}