'use client'
import { type ReactNode, useState, type FC } from 'react'
import ThemeContextMode, { type ThemeContextType } from './ThemeContextMode'

export interface IProps {
  children?: ReactNode
}
const ThemeProviderMode: FC<IProps> = ({ children }) => {
  const [value, setValue] = useState('dark')

  const updateValue = (newValue: string): void => {
    setValue(newValue)
  }

  const contextValue: ThemeContextType = {
    value,
    updateValue
  }

  return (
    <ThemeContextMode.Provider value={contextValue}>
      {children}
    </ThemeContextMode.Provider>
  )
}

export default ThemeProviderMode
