import { Abel, League_Spartan } from "next/font/google"

const abel = Abel({
  subsets: ["latin"],
  display: 'swap',
  weight: "400"
})

const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: 'swap',
  weight: ["400", "700"]
})

export const typography = {
    h1: { 
      fontFamily: league_spartan.style.fontFamily,
      fontSize: 40,
      fontWeight: 700,
    },
    h2: { fontFamily: league_spartan.style.fontFamily, fontSize: 35 },
    h3: { fontFamily: league_spartan.style.fontFamily, fontSize: 31 },
    h4: { fontFamily: league_spartan.style.fontFamily, fontSize: 28 },
    h5: { fontFamily: league_spartan.style.fontFamily, fontWeight: 700, fontSize: 22 },
    h6: {
      fontFamily: league_spartan.style.fontFamily,
      fontSize: 18,
      display: "inline-block",
    },
    subtitle1: {
      fontFamily: abel.style.fontFamily,
      fontSize: 33,
    },
    subtitle2: {
      fontFamily: abel.style.fontFamily,
      fontSize: 23,
    },
    body1: {
      fontFamily: abel.style.fontFamily,
      fontSize: 16,
    },
    body2: {
      fontFamily: abel.style.fontFamily,
      fontSize: 14,
    },
    button: { fontFamily: abel.style.fontFamily, fontSize: 16 },
    caption: { fontFamily: abel.style.fontFamily, fontSize: 14 },
    overline: { fontFamily: abel.style.fontFamily, fontSize: 14 },
  };
  