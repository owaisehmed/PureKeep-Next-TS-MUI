import { Grid } from "@mui/material";
import {
  Backdrop,
  ContentBox,
  MainHeading,
  PasswordBannerWrapper,
  SubHeading,
} from "./PasswordManagerBanner.styled";
import { FC } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

interface PasswordManagerProps {
  subHeading?: string;
  mainHeading?: string;
}

const PasswordManagerBanner: FC<PasswordManagerProps> = ({
  subHeading = "How PureKeep Works?",
  mainHeading = "A game changing password manager",
}) => {
  return (
    <PasswordBannerWrapper>
      <Grid container alignItems="center" textAlign="center">
        <Grid item md={12} xs={24}>
          <Backdrop>
            <ContentBox>
              <SubHeading>{subHeading}</SubHeading>
              <MainHeading>{mainHeading}</MainHeading>
              <CustomButton text="Watch Video" />
            </ContentBox>
          </Backdrop>
        </Grid>
      </Grid>
    </PasswordBannerWrapper>
  );
};

export default PasswordManagerBanner;
