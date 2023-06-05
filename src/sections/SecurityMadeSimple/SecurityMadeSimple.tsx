import { Box, Grid } from "@mui/material";
import {
  ContentDecription,
  ContentTitle,
  ContentWrapper,
  IconBox,
  IconBoxWrapper,
  IconText,
  SecurityInnerWrapper,
  SecurityMainWrapper,
} from "./SecurityMadeSimple.styled";
import CustomButton from "../../components/CustomButton/CustomButton";
import Image from "next/image";
import {
  AndroidSVG,
  AppleSVG,
  ChromeSVG,
  FirefoxSVG,
  WebSVG,
  WindowsSVG,
  iOSSVG,
} from "../../../public/assets/assets";

const SecurityMadeSimple = () => {
  return (
    <SecurityMainWrapper>
      <SecurityInnerWrapper>
        <Grid container alignItems="center">
          <Grid item md={12} xs={24}>
            <ContentWrapper>
              <ContentTitle>Security Made Simple.</ContentTitle>
              <ContentDecription>
                Connect to all kinds of devices instantly
              </ContentDecription>
              <IconBoxWrapper>
                <Grid container gap={4}>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={AppleSVG} alt="" />
                      <IconText>Apple</IconText>
                    </IconBox>
                  </Grid>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={WindowsSVG} alt="" />
                      <IconText>Windows</IconText>
                    </IconBox>
                  </Grid>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={WebSVG} alt="" />
                      <IconText>Web App</IconText>
                    </IconBox>
                  </Grid>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={iOSSVG} alt="" />
                      <IconText>iPhone</IconText>
                    </IconBox>
                  </Grid>
                </Grid>
                <Grid container gap={4} marginTop={2}>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={iOSSVG} alt="" />
                      <IconText>iPad</IconText>
                    </IconBox>
                  </Grid>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={ChromeSVG} alt="" />
                      <IconText>Chrome</IconText>
                    </IconBox>
                  </Grid>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={FirefoxSVG} alt="" />
                      <IconText>Firefox</IconText>
                    </IconBox>
                  </Grid>
                  <Grid item md={2}>
                    <IconBox>
                      <Image src={AndroidSVG} alt="" />
                      <IconText>Android</IconText>
                    </IconBox>
                  </Grid>
                </Grid>
              </IconBoxWrapper>
              <CustomButton
                text="See All Apps"
                color="tertiary"
                width="250px"
                padding="14px 14px"
                fontSize="24px"
                fontWeight={700}
              />
            </ContentWrapper>
          </Grid>
        </Grid>
      </SecurityInnerWrapper>
    </SecurityMainWrapper>
  );
};

export default SecurityMadeSimple;
