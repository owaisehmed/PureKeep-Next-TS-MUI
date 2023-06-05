import * as React from "react";
import { Box, MenuItem, Menu } from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.svg";
import Separator from "../../../public/assets/Seperator.svg";
import { LogoWrapper, NavbarMenuItem, NavbarWrapper } from "./Navbar.styled";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Image src={Logo} alt="Logo" />
        <Image src={Separator} alt="Separator" />
      </LogoWrapper>
      <NavbarMenuItem>How it Works </NavbarMenuItem>
      <NavbarMenuItem>Features</NavbarMenuItem>
      <NavbarMenuItem
        color="inherit"
        aria-controls="navigation-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        Core Features
      </NavbarMenuItem>
      <Menu
        id="navigation-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMenuClose}>Navigation 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Navigation 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Navigation 3</MenuItem>
      </Menu>
      <NavbarMenuItem>Pricing</NavbarMenuItem>
    </NavbarWrapper>
  );
};

export default Navbar;
