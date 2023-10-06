import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

const localTheme = localStorage.getItem('theme') as Theme
export const ThemeContext = createContext<ThemeContextProps>({
  theme: localTheme,
})
export const LOCAL_STORAGE_THEME_KEY = 'theme'
