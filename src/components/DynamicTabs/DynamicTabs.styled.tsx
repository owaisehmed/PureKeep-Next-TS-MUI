import { Box, Tab, styled } from "@mui/material";

export const TabsWrapper = styled(Box)({
  width: "100%",
  padding: "129px 156px",
  maxWidth: "1440px",
  margin: " 0 auto",
});

export const CustomTabTitle = styled(Box)({
  fontWeight: 500,
  fontSize: "28px",
  lineHeight: "100%",
  color: "#001219",
  textTransform: "none",
});

export const MuiTab = styled(Tab)({
  border: "1px solid #D5D5D5",
  borderRadius: "0 22px 22px 0",
  alignItems: "flex-start",
  padding: "40px 41px",
  flexGrow: 1,
  maxWidth: "100%",
});

export const CustomTabDesc = styled(Box)<{ show: boolean }>(({ show }) => ({
  display: show ? "block" : "none",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "120%",
  color: "#637381",
  textTransform: "none",
  fontFamily: "__Lora_78f73e",
  marginTop: 25,
}));

export const ImageWrapper = styled(Box)({
  paddingLeft: 30,
});
