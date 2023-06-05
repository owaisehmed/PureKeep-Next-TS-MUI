import { Box, styled } from "@mui/material";

export const TopbarWrapper = styled(Box)({
  display: "flex",
  background: "transparent",
  position: "absolute",
  top: "30px",
  width: "100%",
  padding: "0px 80px",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const TopbarButtonWrapper = styled(Box)({
  display: "flex",
  gap: "20px",
});

export const TopbarNavigationWrapper = styled(Box)({
  display: "flex",
  gap: "20px",
});

export const TopbarMenuItem = styled(Box)({
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "119%",
});
