'use client'
import { darkPalette } from './darkPalette'
import { createBreakpoints } from '@mui/system'
import { Theme } from '@mui/material/styles'
import { alpha } from '@mui/system';

const breakpoints = createBreakpoints({})

export const darkComponents = {
  // Name of the component
  MuiContainer: {
    styleOverrides: {
      // Name of the slot
      root: {
        maxWidth: '1440px !important',
        paddingLeft: 87,
        paddingRight: 87,
        [breakpoints.down('md')]: {
          paddingLeft: 25,
          paddingRight: 25
        }
      }
    }
  }, // Name of the component
  MuiAppBar: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        backgroundColor: '#fff',
        borderRadius: '0 !important'
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: 0,
        border: 'solid 1px black',
        boxShadow: 'none'
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        textTransform: 'capitalize' as const,
        fontFamily: '"NeuzeitGroLig", sans-serif',
        fontSize: '0.875rem'
      }
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        // fill: 'transparent'
      }
    }
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        borderRadius: '0.5rem'
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        backgroundImage: 'none',
        backgroundColor: darkPalette.secondary.dark
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '0.9rem'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: darkPalette.secondary?.contrastText,
        textTransform: 'capitalize' as const
      }
    }
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          color: darkPalette.primary.main + '!important'
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
      contained: {
        backgroundColor: darkPalette.secondary.main,
        textTransform: 'capitalize' as const,
        fontSize: 16,
        fontWeight: 600,
        width: '100%',
        padding: '0.55rem',
        '&:hover': {
          backgroundColor: darkPalette.primary.gray
        }
      },
      outlinedPrimary: {
        color: darkPalette.secondary?.contrastText,
        border: `solid 0.75px ${darkPalette.secondary?.contrastText}`,
        transition: '0.3s',
        fontSize: 16,
        fontWeight: 600,
        textTransform: 'inherit' as const,
        width: '100%',
        '&:hover': {
          border: `solid 0.75px ${darkPalette.secondary?.contrastText}`
          // transform: 'scale(1.06)'
        }
      },
      // outlinedSecondary: {
      //   color: darkPalette.primary?.main,
      //   border: `solid 0.75px ${darkPalette.primary?.main}`,
      //   fontWeight: 800,
      //   transition: '0.3s',
      //   textTransform: 'inherit' as const,
      //   '&:hover': {
      //     border: `solid 0.75px ${darkPalette.primary?.main}`
      //     // transform: 'scale(1.06)'
      //   }
      // },
      // outlinedSizeLarge: {
      //   fontSize: 30,
      //   padding: '14px 27px',
      //   borderRadius: 50
      // },
      // textPrimary: {
      //   textTransform: 'inherit' as const,
      //   color: darkPalette.secondary?.contrastText,
      //   fontSize: '1.125rem',
      //   padding: '0 6px !important',
      //   transition: '0.3s',

      //   '&:hover': {
      //     // transform: 'scale(1.06)'
      //   }
      // },
      // textSecondary: {
      //   textTransform: 'inherit' as const,
      //   color: darkPalette.primary?.main,
      //   fontSize: '1.125rem',
      //   padding: '0 6px !important',
      //   transition: '0.3s',

      //   '&:hover': {
      //     // transform: 'scale(1.06)'
      //   }
      // }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '100%',
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        width: '100%',
        borderRadius: 4,
        position: 'relative',
        backgroundColor: darkPalette.primary.gray,
        border: '1px solid',
        borderColor: darkPalette.primary.gray,
        fontSize: 16,
        'label': {
          color: 'black',
        },
        'label + &': {
          marginTop: '2rem',
        },
        '&:hover': {
          backgroundColor: darkPalette.primary.gray
        },
        '& input:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 1000px ${darkPalette.primary.gray} inset`,
          WebkitTextFillColor: darkPalette.primary.main
        },
        input: {
          padding: '0.55rem',
          color: darkPalette.primary.main,
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: darkPalette.primary.main,
        fontSize: 16,
        transform: 'unset',
        '&.Mui-focused': {
          color: darkPalette.primary.main,
        }
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {}
  }
}
