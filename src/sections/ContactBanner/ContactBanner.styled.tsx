import { Box, styled } from "@mui/material";

export const ContactBannerWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "124px 156px",
});

export const ContactBannerInnerWrapper = styled(Box)({
  backgroundColor: "#FFBA24",
  padding: 80,
  boxShadow: "13px 19px 19px rgba(0, 18, 25, 0.03)",
  borderRadius: 16,
});

export const ContactBannerText = styled(Box)({
  fontWeight: 700,
  fontSize: 48,
  lineHeight: "110%",
  letterSpacing: "-0.02em",
  color: "#001219",
});
