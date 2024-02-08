'use client'
import { createContext } from 'react'

export interface ThemeContextType {
  value: string
  updateValue?: (newValue: string) => void
}

const ThemeContextMode = createContext<ThemeContextType>({value: 'dark'})

export default ThemeContextMode
