import { FC } from "react";
import {
  BannerContainerWrapper,
  BannerMainWrapper,
  BodyText,
  CTAWrapper,
  ContentWrapper,
  HeadingText,
  HeroGridWrapper,
  SignupWrapper,
  StyledImageContainer,
  StyledTextContainer,
} from "./HeroHome.styled";
import Image, { StaticImageData } from "next/image";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

interface HeroHomeProps {
  heading: string;
  text: string;
  imageSrc: string | StaticImageData;
}

const HeroHome: FC<HeroHomeProps> = ({ heading, text, imageSrc }) => {
  return (
    <HeroGridWrapper>
      <BannerMainWrapper>
        <Grid container alignItems="flex-end" spacing={2}>
          <Grid item md={6} xs={12}>
            <BannerContainerWrapper>
              <ContentWrapper>
                <StyledTextContainer>
                  <HeadingText>{heading}</HeadingText>
                  <BodyText>{text}</BodyText>
                </StyledTextContainer>
                <CTAWrapper>
                  <CustomButton
                    text="Get Early Access"
                    variant="contained"
                    color="secondary"
                    padding="18px 28px"
                    fontWeight={700}
                    fontSize="20px"
                    width="100%"
                  />
                  <SignupWrapper>
                    Don’t have an account yet? Signup now
                  </SignupWrapper>
                </CTAWrapper>
              </ContentWrapper>
            </BannerContainerWrapper>
          </Grid>
          <Grid item md={6} xs={12}>
            <StyledImageContainer>
              <Image src={imageSrc} alt="header image" />
            </StyledImageContainer>
          </Grid>
        </Grid>
      </BannerMainWrapper>
    </HeroGridWrapper>
  );
};

export default HeroHome;
