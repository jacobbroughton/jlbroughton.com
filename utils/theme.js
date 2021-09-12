export const useTheme = () => {
  let theme;
  if(typeof window !== "undefined") {
    theme = localStorage.getItem("theme")
  }

  return theme
}

export const setTheme = (theme) => {
  if(typeof window !== "undefined") {
    // let oldTheme = localStorage.getItem("theme")
    localStorage.setItem("theme", theme)
  }
}