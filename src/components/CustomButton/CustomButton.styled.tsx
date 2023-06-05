import { styled } from "@mui/material";

interface ButtonStyles {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "tertiary";
  padding?: string;
  fontSize?: string;
  fontWeight?: number;
  width?: string;
}

export const Button = styled("button")<ButtonStyles>(
  ({ variant, color, padding, fontSize, fontWeight, width }) => ({
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    borderRadius: "30px",
    fontFamily: "__Roboto_5506ec",
    color:
      variant && color ? variantToColorMapper[variant][color].color : "#000",
    backgroundColor:
      variant && color
        ? variantToColorMapper[variant][color].backgroundColor
        : "#000",
    border:
      variant && color
        ? `1px solid ${variantToColorMapper[variant][color].borderColor}`
        : "#000",

    fontWeight,
    padding,
    fontSize,
    width,
  })
);

const variantToColorMapper = {
  contained: {
    primary: {
      color: "#000",
      backgroundColor: "#FFBA24",
      borderColor: "#FFBA24",
    },
    secondary: {
      color: "#fff",
      backgroundColor: "#120636",
      borderColor: "#120636",
    },
    tertiary: {
      color: "#fff",
      backgroundColor: "#2EC4B6",
      borderColor: "#2EC4B6",
    },
  },
  outlined: {
    primary: {
      color: "#000",
      backgroundColor: "transparent",
      borderColor: "#000",
    },
    secondary: {
      color: "#fff",
      backgroundColor: "transparent",
      borderColor: "#120636",
    },
    tertiary: {
      color: "#fff",
      backgroundColor: "transparent",
      borderColor: "#2EC4B6",
    },
  },
};
