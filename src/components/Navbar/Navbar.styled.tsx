import { Box, styled } from "@mui/material";

export const NavbarWrapper = styled(Box)({
  display: "flex",
  gap: "40px",
  position: "absolute",
  top: "110px",
  width: "100%",
  padding: "0px 80px",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "40px",
});

export const NavbarMenuItem = styled(Box)({
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "120%",
});
