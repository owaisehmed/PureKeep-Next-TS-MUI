import { Box, ListItem, styled } from "@mui/material";

export const FooterBarWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 156px",
  position: "relative",
  marginBottom: "-64px",
});

export const FooterBarInnerWrapper = styled(Box)({
  background: "linear-gradient(255.35deg, #1A9D8E 22.25%, #22CDB9 64.42%)",
  borderRadius: 16,
  padding: "37px 100px",
});

export const FooterBarContentBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const BarText = styled(Box)({
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "120%",
  color: "#fff",
  marginLeft: 30,
  paddingRight: 80,
});

export const FooterMainWrapper = styled(Box)({
  backgroundColor: "#001219",
  width: "100%",
});

export const FooterInnerWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "130px 183px",
});

export const FooterNavigation = styled(Box)({});

export const ListItemMain = styled(ListItem)({
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "124%",
  letterSpacing: "0.02em",
  color: "#637381",
  fontFamily: "__Lora_78f73e",
  paddingBottom: "16px",
  paddingTop: "0",
  paddingLeft: "0",
});

export const ListItemChildren = styled(ListItem)({
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "120%",
  color: "#fff",
  paddingTop: "0",
  paddingLeft: "0",
});

export const CopyrightWrapper = styled(Box)({
  borderTop: "1px solid #637381",
});

export const CopyrightInnerWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "37px 183px",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "120%",
  color: "#637381",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SiteMapSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SiteLanguage = styled(Box)({
  border: "1px solid #637381",
  borderRadius: "23px",
  padding: "3px 14px",
  marginLeft: "24px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const SpecificLanguage = styled(Box)({
  marginLeft: 10,
  marginRight: 10,
});
