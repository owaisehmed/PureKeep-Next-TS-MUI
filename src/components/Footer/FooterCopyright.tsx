import { FC } from "react";
import Image from "next/image";
import {
  CopyrightInnerWrapper,
  CopyrightWrapper,
  SiteLanguage,
  SiteMapSection,
  SpecificLanguage,
} from "./Footer.styled";
import { GlobeSVG } from "../../../public/assets/assets";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FooterCopyright: FC = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "PureVPN";
  return (
    <CopyrightWrapper>
      <CopyrightInnerWrapper>
        &copy; {currentYear} {companyName}. All Rights Reserved.
        <SiteMapSection>
          Sitemap
          <SiteLanguage>
            <Image src={GlobeSVG} alt="" />
            <SpecificLanguage>English</SpecificLanguage>
            <ExpandLessIcon />
          </SiteLanguage>
        </SiteMapSection>
      </CopyrightInnerWrapper>
    </CopyrightWrapper>
  );
};

export default FooterCopyright;
