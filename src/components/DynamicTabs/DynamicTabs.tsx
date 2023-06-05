import React, { FC, useState } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import {
  CustomTabDesc,
  CustomTabTitle,
  ImageWrapper,
  MuiTab,
  TabsWrapper,
} from "./DynamicTabs.styled";
import Image, { StaticImageData } from "next/image";

interface TabData {
  label: string;
  content: string;
  imageSrc: string | StaticImageData;
}

interface DynamicTabsProps {
  tabs: TabData[];
}

interface CustomTabButtonProps {
  title: string;
  desc: string;
  show: boolean;
}

const CustomTabButton: FC<CustomTabButtonProps> = ({ title, desc, show }) => {
  return (
    <Box textAlign="left">
      <CustomTabTitle>{title}</CustomTabTitle>
      <CustomTabDesc show={!!show}>{desc}</CustomTabDesc>
    </Box>
  );
};

const DynamicTabs: React.FC<DynamicTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <TabsWrapper>
      <Grid container alignItems="flex-start">
        <Grid item md={6} xs={12}>
          <Tabs
            orientation="vertical"
            value={activeTab}
            onChange={handleChange}
            aria-label="PureKeep Tabs"
            TabIndicatorProps={{
              sx: { left: 0, width: 4 },
            }}
          >
            {tabs.map((tab, index) => (
              <MuiTab
                key={index}
                sx={{ width: "100%" }}
                label={
                  <CustomTabButton
                    title={tab.label}
                    desc={tab.content}
                    show={activeTab === index}
                  />
                }
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item md={6} xs={12}>
          {tabs.map((tab, index) => (
            <ImageWrapper
              key={index}
              component="div"
              role="tabpanel"
              hidden={activeTab !== index}
              id={`vertical-tabpanel-${index}`}
              aria-labelledby={`vertical-tab-${index}`}
            >
              <Image src={tab.imageSrc} alt="" />
            </ImageWrapper>
          ))}
        </Grid>
      </Grid>
    </TabsWrapper>
  );
};

export default DynamicTabs;
