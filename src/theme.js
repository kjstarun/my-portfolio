import { createTheme } from "@mui/material/styles";

export const tokens = {
  bg: "#0A0E17",
  bgElevated: "#121826",
  glass: "rgba(255,255,255,0.045)",
  glassBorder: "rgba(255,255,255,0.09)",
  amber: "#F2B84B",
  teal: "#3FDBC7",
  text: "#E8EAF0",
  textMuted: "#8B93A7",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: tokens.bg, paper: tokens.bgElevated },
    primary: { main: tokens.amber },
    secondary: { main: tokens.teal },
    text: { primary: tokens.text, secondary: tokens.textMuted },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
});

export default theme;
