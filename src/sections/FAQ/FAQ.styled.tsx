import { Accordion, Box, styled } from "@mui/material";

export const FAQMainWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "80px 156px",
  textAlign: "center",
});

export const FaqQuestion = styled(Box)({
  color: "#001219",
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "100%",
  textAlign: "left",
});

export const FaqAnswer = styled(Box)({
  color: "#637381",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "100%",
  fontFamily: "__Lora_78f73e",
  textAlign: "left",
});

export const CustomAccordion = styled(Accordion)({
  boxShadow: "none",
  border: "4px solid rgba(99, 115, 129, 0.12)",
  borderRadius: "16px",
  padding: "34px 40px",
  marginBottom: "20px",
  "::before": {
    display: " none",
  },
  ":first-of-type": {
    borderRadius: "16px",
  },
  ":last-of-type": {
    borderRadius: "16px",
  },
  ".MuiAccordionDetails-root": {},
  ".MuiAccordionSummary-root": {},
});

export const FaqTitle = styled(Box)({
  color: "#001219",
  fontWeight: 700,
  fontSize: 48,
  lineHeight: "110%",
  marginBottom: 40,
});

export const FaqSubTitle = styled(Box)({
  color: "#637381",
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "130%",
  letterSpacing: "-0.02em",
  fontFamily: "__Lora_78f73e",
  marginBottom: 40,
});
