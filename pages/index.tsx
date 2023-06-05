import Box from "@mui/material/Box";
import Layout from "../src/components/Layout/Layout";
import PasswordManagerBanner from "../src/sections/PasswordManagerBanner/PasswordManagerBanner";
import BoxComponent from "../src/components/BoxComponent/BoxComponent";
import { BoxTitle } from "../src/App.styled";
import HeroHome from "../src/sections/HeroHome/HeroHome";
import SecurityMadeSimple from "../src/sections/SecurityMadeSimple/SecurityMadeSimple";
import {
  BannerImg,
  ControlImg,
  PasswordImg,
  SafeImg,
  SecureImg,
} from "../public/assets/assets";
import DynamicTabs from "../src/components/DynamicTabs/DynamicTabs";
import FAQ from "../src/sections/FAQ/FAQ";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../src/redux/faqSlice";
import FAQForm from "../src/form/FAQForm/FAQForm";
import ContactBanner from "../src/sections/ContactBanner/ContactBanner";
import { mockFAQs, tabData } from "../src/data";
import Head from "next/head";

export default function Home() {
  const dispatch = useDispatch();
  const faqs = useSelector((state: any) => state.faqs.faqs);

  useEffect(() => {
    dispatch(fetchData(mockFAQs));
  }, []);

  return (
    <Box>
      <Head>
        <title>PureKeep</title>
      </Head>
      <Layout>
        <HeroHome
          imageSrc={BannerImg}
          heading="Securing passwords made easy"
          text="As part of our commitment to ensure digital security and privacy, we’ve built a cutting-edge Password Manager - PureKeep."
        />
        <PasswordManagerBanner />
        <DynamicTabs tabs={tabData} />
        <Box mb={20}>
          <BoxTitle>You've got it all in your hands</BoxTitle>
          <BoxComponent
            title="Let’s keep things between you & you only."
            description="You can stop worrying about your privacy. Now with PureKeep’s zero knowledge policy, you can keep your personal information private and secure than ever before."
            image={SafeImg}
          />
          <BoxComponent
            title="Your digital life can be a mess, protecting it shouldn’t be."
            description="Securely and efficiently manage your digital possessions with a robust, fast & easy to use solution"
            image={SecureImg}
            isLeftImage
          />
          <BoxComponent
            title="Generate strong & unique passwords on a tap."
            description="Easily generate strong & unique passwords to avoid security breaches. Privately manage all your possessions in just one tap be it files, photos or even card details."
            image={PasswordImg}
          />
          <BoxComponent
            title="Take control. Anywhere, Anytime."
            description="Backup, Sync and securely orchestrate your data. Access all of your passwords & critical information across multiple devices and access at any time, from anywhere, with anyone."
            image={ControlImg}
            isLeftImage
          />
        </Box>
        <SecurityMadeSimple />
        <FAQ faqs={faqs} />
        <FAQForm />
        <ContactBanner />
      </Layout>
    </Box>
  );
}
