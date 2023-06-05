import { FC } from "react";
import { Grid } from "@mui/material";
import {
  BarText,
  FooterBarContentBox,
  FooterBarInnerWrapper,
  FooterBarWrapper,
} from "./Footer.styled";
import Image from "next/image";
import {
  FooterCheck,
  FooterClick,
  FooterSmile,
} from "../../../public/assets/assets";

const FooterBar: FC = () => {
  return (
    <FooterBarWrapper>
      <FooterBarInnerWrapper>
        <Grid container alignItems="center">
          <Grid item md={4} xs={12}>
            <FooterBarContentBox>
              <Image src={FooterSmile} alt="" />
              <BarText>3 Million+ Satisfied Users</BarText>
            </FooterBarContentBox>
          </Grid>
          <Grid item md={4} xs={12}>
            <FooterBarContentBox>
              <Image src={FooterClick} alt="" />
              <BarText>One Click Software</BarText>
            </FooterBarContentBox>
          </Grid>
          <Grid item md={4} xs={12}>
            <FooterBarContentBox>
              <Image src={FooterCheck} alt="" />
              <BarText>KPMG Log-Free Verified</BarText>
            </FooterBarContentBox>
          </Grid>
        </Grid>
      </FooterBarInnerWrapper>
    </FooterBarWrapper>
  );
};

export default FooterBar;
