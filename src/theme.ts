import { Lora, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const lora = Lora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#2EC4B6",
    },
    secondary: {
      main: "#FFBA24",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "Helvetica Neue",
      roboto.style.fontFamily,
      lora.style.fontFamily,
    ].join(","),
  },
});

export default theme;
