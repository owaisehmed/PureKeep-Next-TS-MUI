import { FC } from "react";
import { Button } from "./CustomButton.styled";

export type ButtonProps = React.ComponentProps<"button"> & {
  type?: "button" | "submit" | "reset";
  text?: string;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "tertiary";
  padding?: string;
  disabled?: boolean;
  fontSize?: string;
  fontWeight?: number;
  width?: string;
};

const CustomButton: FC<ButtonProps> = ({
  variant = "contained",
  type = "button",
  color = "primary",
  text,
  disabled = false,
  padding = "13px 24px",
  fontSize = "18px",
  fontWeight = 500,
  width = "fit-content",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      padding={padding}
      type={type}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
