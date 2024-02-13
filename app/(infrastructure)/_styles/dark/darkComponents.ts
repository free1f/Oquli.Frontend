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
        fill: darkPalette.secondary?.main,
        '&.MuiSelect-icon': {
          fill: darkPalette.secondary?.gray
        }
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
        backgroundColor: darkPalette.secondary.dark,
        '&.MuiPopover-paper': {
          '&.MuiMenu-paper': {
            backgroundColor: darkPalette.primary.gray
          }
        }
      },
    }
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        border: 'unset',
        '&:hover': {
          borderColor: 'unset'
        }
      },
      select: {
        // padding: '0 0.5rem',
        fontSize: 16,
        lineHeight: '1rem',
        width: '100%',
        color: darkPalette.primary.contrastText,
        backgroundColor: darkPalette.primary.gray,
      },
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
        '&.Mui-disabled': {
          backgroundColor: darkPalette.primary.gray,
          color: darkPalette.secondary.gray,
          fontWeight: 700
        }
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
        fill: darkPalette.secondary.main,
        textTransform: 'inherit' as const,
        border: 'none',
        padding: '1rem',
        fontSize: 16,
        fontWeight: 700,
        borderRadius: '10px',
        boxShadow: '2px 2px 4px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 5px 101px 0px rgba(0,0,0,0.12)',
        '&:hover': {
          border: 'none',
        }
      },
      text: {
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
