'use client'
import { createTheme } from '@mui/material/styles'

import { lightPalette } from './light/lightPalette'
import { lightComponents } from './light/lightComponents'

import { darkComponents } from './dark/darkComponents'
import { darkPalette } from './dark/darkPalette'

import { typography } from './typography'
import { breakpoints } from './breakpoints'

export const lightTheme = createTheme({
  typography,
  breakpoints,
  palette: {
    ...lightPalette,
    mode: 'light'
  },
  components: {
    ...lightComponents
  }
})

export const darkTheme = createTheme({
  typography,
  breakpoints,
  palette: {
    ...darkPalette,
    mode: 'dark'
  },
  components: {
    ...darkComponents,
    MuiFilledInput: {
      styleOverrides: {
        root: {
          variants: [] // Add the missing 'variants' property here
        }
      }
    }
  }
})
