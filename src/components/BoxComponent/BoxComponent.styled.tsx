import { Box, styled } from "@mui/material";

export const BoxComponentWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto 40px auto",
  padding: "0 156px",
});

export const ContentWrapper = styled(Box)({});

export const ImageWrapper = styled(Box)({});

export const ContentHeading = styled(Box)({
  fontWeight: 700,
  fontSize: 48,
  lineHeight: "110%",
  letterSpacing: "-0.02em",
  color: "#001219",
  marginBottom: 21,
  paddingRight: 50,
});

export const ContentDescription = styled(Box)({
  fontFamily: "__Lora_78f73e",
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "130%",
  letterSpacing: "-0.02em",
  color: "#637381",
});
