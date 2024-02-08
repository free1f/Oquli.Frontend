import { lightPalette } from "./lightPalette";

export const lightComponents = {
  // Name of the component
  MuiAppBar: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        backgroundColor: "#fff",
        borderRadius: "0 !important",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: 0,
        border: "solid 1px black",
        boxShadow: "none",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        textTransform: "capitalize" as const,
        fontFamily: '"NeuzeitGroLig", sans-serif',
        fontSize: "0.875rem",
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        // fill: 'transparent'
      },
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        borderRadius: "0.5rem",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "0.9rem",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: lightPalette.primary?.contrastText,
        textTransform: "capitalize" as const,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 30,
      },
      contained: {},
      outlinedPrimary: {
        color: lightPalette.primary?.contrastText,
        border: `solid 0.75px ${lightPalette.primary?.contrastText}`,
        fontWeight: 800,
        transition: "0.3s",
        textTransform: "inherit" as const,
        "&:hover": {
          border: `solid 0.75px ${lightPalette.primary?.contrastText}`,
          transform: "scale(1.06)",
        },
      },
      textPrimary: {
        textTransform: "inherit" as const,
        color: lightPalette.primary?.contrastText,
        fontSize: "1.125rem",
        padding: "0 6px !important",
        transition: "0.3s",

        "&:hover": {
          transform: "scale(1.06)",
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {},
    },
  },
  MuiCssBaseline: {
    styleOverrides: {},
  },
};
