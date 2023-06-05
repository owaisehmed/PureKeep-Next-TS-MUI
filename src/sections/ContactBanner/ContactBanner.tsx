import { Grid } from "@mui/material";
import {
  ContactBannerInnerWrapper,
  ContactBannerText,
  ContactBannerWrapper,
} from "./ContactBanner.styled";
import CustomButton from "../../components/CustomButton/CustomButton";

const ContactBanner = () => {
  return (
    <ContactBannerWrapper>
      <ContactBannerInnerWrapper>
        <Grid container alignItems="flex-end">
          <Grid item md={8} xs={12} paddingRight="20px">
            <ContactBannerText>
              Have more questions? We’re here to help you 24/7.
            </ContactBannerText>
          </Grid>
          <Grid item md={4} xs={12} textAlign="right">
            <CustomButton text="Contact Support" color="secondary" />
          </Grid>
        </Grid>
      </ContactBannerInnerWrapper>
    </ContactBannerWrapper>
  );
};

export default ContactBanner;
