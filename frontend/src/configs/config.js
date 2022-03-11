import { createTheme } from "@mui/material/styles";
import CeraProWoff from "../fonts/CeraPro-Regular.woff";
import { amber, deepOrange, grey } from '@mui/material/colors';

export const getCurrentTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F59F2F",
    },
  },
  typography: {
    fontFamily: ["Cera Pro", "Roboto"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Cera Pro';
          src: local('Cera Pro'), local('CeraPro-Regular'), url(${CeraProWoff}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
 
      `,
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: grey[900]
        },
        arrow: {
          color: grey[900]
        },
      }
    },
  },
});
