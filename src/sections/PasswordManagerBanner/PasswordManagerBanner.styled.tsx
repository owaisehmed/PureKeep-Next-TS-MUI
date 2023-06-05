import { Box, styled } from "@mui/material";

export const PasswordBannerWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "80px 156px",
});

export const Backdrop = styled(Box)({
  backgroundImage: "url(/assets/Purple-Overlay.png)",
  backgroundRepeat: "no-repeat",
  minHeight: "525px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SubHeading = styled(Box)({
  fontWeight: 500,
  fontSize: 14,
  lineHeight: "100%",
  letterSpacing: "0.36em",
  textTransform: "uppercase",
  color: "#fff",
  marginBottom: 40,
});

export const MainHeading = styled(Box)({
  fontWeight: 700,
  fontSize: 48,
  lineHeight: "110%",
  letterSpacing: "-0.02em",
  color: "#fff",
  marginBottom: 40,
});

export const ContentBox = styled(Box)({ width: "558px" });
