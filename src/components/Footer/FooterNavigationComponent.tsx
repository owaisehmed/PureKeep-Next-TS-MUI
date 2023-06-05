import { FC } from "react";
import { Box, Grid, List, Typography } from "@mui/material";
import {
  FooterNavigation,
  ListItemChildren,
  ListItemMain,
} from "./Footer.styled";
import {
  FooterColumn1,
  FooterColumn10,
  FooterColumn2,
  FooterColumn3,
  FooterColumn4,
  FooterColumn5,
  FooterColumn6,
  FooterColumn7,
  FooterColumn8,
  FooterColumn9,
} from "../../data";
import Image from "next/image";

const FooterNavigationComponent: FC = () => {
  return (
    <FooterNavigation>
      <Grid container alignItems="flex-start" justifyContent="center">
        <Grid item xs={4.8} md={2.4}>
          <List component="nav" aria-label="footer navigation">
            <ListItemMain>PureVPN Apps</ListItemMain>
            {FooterColumn1.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
          <List
            component="nav"
            aria-label="footer navigation"
            sx={{ marginTop: 6 }}
          >
            <ListItemMain>VPN Setup</ListItemMain>
            {FooterColumn7.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
        </Grid>
        <Grid item xs={4.8} md={2.4}>
          <List component="nav" aria-label="footer navigation">
            <ListItemMain>PureVPN</ListItemMain>
            {FooterColumn2.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
          <List
            component="nav"
            aria-label="footer navigation"
            sx={{ marginTop: 6 }}
          >
            <ListItemMain>VPN Add-ons</ListItemMain>
            {FooterColumn8.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
        </Grid>
        <Grid item xs={4.8} md={2.4}>
          <List component="nav" aria-label="footer navigation">
            <ListItemMain>Discover</ListItemMain>
            {FooterColumn3.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
          <List
            component="nav"
            aria-label="footer navigation"
            sx={{ marginTop: 6 }}
          >
            <ListItemMain>About PureVPN</ListItemMain>
            {FooterColumn9.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
        </Grid>
        <Grid item xs={4.8} md={2.4}>
          <List component="nav" aria-label="footer navigation">
            <ListItemMain>Help</ListItemMain>
            {FooterColumn4.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
          <List
            component="nav"
            aria-label="footer navigation"
            sx={{ marginTop: 6 }}
          >
            <ListItemMain>Programs</ListItemMain>
            {FooterColumn10.map((item, index) => {
              return <ListItemChildren key={index}>{item}</ListItemChildren>;
            })}
          </List>
        </Grid>
        <Grid item xs={4.8} md={2.4}>
          <List component="nav" aria-label="footer navigation">
            <ListItemMain>Follow Us</ListItemMain>
            {FooterColumn5.map((item, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                  key={index}
                >
                  <Image src={item.svg} alt="" />
                  <ListItemChildren>{item.text}</ListItemChildren>
                </Box>
              );
            })}
          </List>
          <List
            component="nav"
            aria-label="footer navigation"
            sx={{ marginTop: 6 }}
          >
            <ListItemMain>Download</ListItemMain>
            {FooterColumn6.map((item, index) => {
              return (
                <Box
                  sx={{
                    marginBottom: "8px",
                  }}
                  key={index}
                >
                  <Image src={item.svg} alt="" />
                </Box>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </FooterNavigation>
  );
};

export default FooterNavigationComponent;
