import { Box, styled } from "@mui/material";

export const BannerMainWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "200px 80px 150px 130px",
});

export const HeroGridWrapper = styled(Box)({
  backgroundImage: "url(/assets/Onboarding-BG.jpg)",
  backgroundColor: "#35D6C7",
  backgroundRepeat: "no-repeat",
});

export const BannerContainerWrapper = styled(Box)({});

export const HeadingText = styled(Box)({
  fontWeight: 700,
  fontSize: "64px",
  lineHeight: "110%",
  letterSpacing: "-0.02em",
});

export const BodyText = styled(Box)({
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "126%",
  marginTop: "18px",
  fontFamily: "__Lora_78f73e",
  paddingRight: 50,
});

export const StyledTextContainer = styled(Box)({
  marginBottom: "41px",
});

export const StyledImageContainer = styled(Box)({});

export const ContentWrapper = styled(Box)({});

export const SignupWrapper = styled(Box)({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "120%",
  color: "#120636",
  marginTop: "10px",
});

export const CTAWrapper = styled(Box)({
  width: "290px",
  textAlign: "center",
});
