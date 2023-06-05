import { Box, styled } from "@mui/material";

export const SecurityMainWrapper = styled(Box)({
  backgroundColor: "#2EC4B6",
  width: "100%",
  padding: "129px 156px",
});

export const SecurityInnerWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  backgroundImage: "url(/assets/Ripple.png)",
  backgroundRepeat: "no-repeat",
  minHeight: "550px",
  backgroundSize: "contain",
  backgroundColor: "#fff",
  borderRadius: 24,
  backgroundPosition: "center right",
});

export const ContentWrapper = styled(Box)({
  padding: "67px 0 60px 47px",
  width: "55%",
});

export const ContentTitle = styled(Box)({
  fontFamily: "__Lora_78f73e",
  fontWeight: 600,
  fontSize: 48,
  lineHeight: "119%",
  letterSpacing: "-0.04em",
  color: "#001219",
  marginBottom: 25,
});

export const ContentDecription = styled(Box)({
  color: "#7D8585",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "124%",
});

export const IconBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "8.74721px 5.46701px 4.37361px rgba(0, 18, 25, 0.04)",
  borderRadius: "9px",
  padding: 12,
});

export const IconBoxWrapper = styled(Box)({
  margin: "50px 0",
  width: "80%",
});

export const IconText = styled(Box)({
  marginTop: 7,
  color: "#7D8585",
  fontWeight: 400,
  fontSize: 11,
  lineHeight: "120%",
});
