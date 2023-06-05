import { FC } from "react";
import { Box } from "@mui/material";
import { FooterInnerWrapper, FooterMainWrapper } from "./Footer.styled";
import FooterBar from "./FooterBar";
import FooterNavigationComponent from "./FooterNavigationComponent";
import FooterCopyright from "./FooterCopyright";

const Footer: FC = () => {
  return (
    <Box>
      <FooterBar />
      <FooterMainWrapper>
        <FooterInnerWrapper>
          <FooterNavigationComponent />
        </FooterInnerWrapper>
        <FooterCopyright />
      </FooterMainWrapper>
    </Box>
  );
};

export default Footer;
