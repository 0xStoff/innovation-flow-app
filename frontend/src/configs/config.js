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

// .MuiTooltip-tooltip {
//   background-color:primary !important;
// }
// .MuiTooltip-arrow{
//   color: #F59F2F !important;
// }
// export const user = { id: 1, name: "Stoff" };

// const comments1 = [
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Betti Bossi",
//     // primary: "Was für ein sch**!!",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [3],
//   },
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Kathrin Wupppethaler",
//     primary: "Finde ich eine super Idee!",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [2, 4, 5, 6],
//   },
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Anna Solis",
//     // primary: "Finde sdgfdsfg!",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [5, 6],
//   },
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Florence Hopkins",
//     // primary: "Findsdfgdsfg",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [2, 4, 6],
//   },
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Elizabeth Butler",
//     // primary: "Finddsgdsfgsdgf",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [2, 4, 5, 6],
//   },
// ];

// const comments2 = [
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Marie Carpenter",
//     // primary: "Finde ich eine super Idee!",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [1, 3],
//   },
// ];

// const comments3 = [
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Mary Melone",
//     // primary: "MNOON!",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [1, 6, 9, 10],
//   },
// ];

// const comments4 = [
//   {
//     avatar: "/static/images/avatar/1.jpg",
//     username: "Helen Lyons",
//     // primary: "Lorem ipsum sit dolor!",
//     secondary:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
//     likes: [],
//   },
// ];

// export const getFeedbacks = [
//   {
//     id: 1,
//     title: "Neues Sofa für den Pausenraum",
//     content:
//       "Unser Sofa ist schon ziemlich alt, auch ist es nicht mehr gemütlich. Ich schlage daher vor, dass wir uns eine neues Sofa besorgen.",
//     comments: comments1,
//     likes: [2, 4, 5, 6],
//   },
//   {
//     id: 2,
//     title: "Wir brauchen endlich einen Geschirrspüler!",
//     content:
//       "Es wird langsam Zeit; schon lange dachten wir, wir würden bald einen Geschirrspüler bekommen. Bisher hat sich aber leider nichts getan. In Anbetracht dessen, dass unsere Agentur immer grösser wird, so wäre es echt mal überlegenswert, ob wir uns nicht eine anschaffen sollten.",
//     comments: comments2,
//     likes: [1, 5, 6],
//   },
//   {
//     id: 3,
//     title: "Lorem Ipsum Dolor!",
//     content:
//       "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
//     comments: comments3,
//     likes: [],
//   },
//   {
//     id: 4,
//     title: "Lorem Ipsum Dolor!",
//     content:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
//     comments: comments4,
//     likes: [2, 6],
//   },
// ];
