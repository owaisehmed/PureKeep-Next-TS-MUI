import { FC } from "react";
import {
  BoxComponentWrapper,
  ContentDescription,
  ContentHeading,
  ContentWrapper,
  ImageWrapper,
} from "./BoxComponent.styled";
import { Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface BoxComponentProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  isLeftImage?: boolean;
}

const BoxComponent: FC<BoxComponentProps> = ({
  title,
  description,
  image,
  isLeftImage = false,
}) => {
  return (
    <BoxComponentWrapper>
      {!isLeftImage ? (
        <Grid container alignItems="center" spacing={2}>
          <Grid item md={6} xs={12}>
            <ContentWrapper>
              <ContentHeading>{title}</ContentHeading>
              <ContentDescription>{description}</ContentDescription>
            </ContentWrapper>
          </Grid>
          <Grid item md={6} xs={12}>
            <ImageWrapper>
              <Image src={image} alt="" />
            </ImageWrapper>
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" spacing={2}>
          <Grid item md={6} xs={12}>
            <ImageWrapper>
              <Image src={image} alt="" />
            </ImageWrapper>
          </Grid>
          <Grid item md={6} xs={12}>
            <ContentWrapper>
              <ContentHeading>{title}</ContentHeading>
              <ContentDescription>{description}</ContentDescription>
            </ContentWrapper>
          </Grid>
        </Grid>
      )}
    </BoxComponentWrapper>
  );
};

export default BoxComponent;
