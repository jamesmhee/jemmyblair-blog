import React, { SetStateAction, createContext, useEffect, useMemo, useState } from 'react'

interface ThemeStoreProps {
  children: JSX.Element[] | JSX.Element
}

interface ThemeContextProps {
  isDark: boolean,
  setIsDark: React.Dispatch<SetStateAction<boolean>>
}
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export function ThemeStore({ children }: ThemeStoreProps) {
  const theme: string | null = localStorage.getItem("theme")
  const [isDark, setIsDark] = useState<boolean>(theme ? theme === "dark" ? true : false : false)
    

  useEffect(() => {    
    if (!theme) {
      localStorage.setItem("theme", "dark")
    } else {
      if (theme === "dark") {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }
  }, [theme])

  const store = useMemo(() => ({
    isDark,
    setIsDark
  }), [isDark, setIsDark])

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}
