import * as React from "react";
import { MenuItem, Menu } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import {
  TopbarButtonWrapper,
  TopbarMenuItem,
  TopbarNavigationWrapper,
  TopbarWrapper,
} from "./Topbar.styled";

const Topbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TopbarWrapper>
      <TopbarNavigationWrapper>
        <TopbarMenuItem>Help</TopbarMenuItem>
        <TopbarMenuItem>Blog</TopbarMenuItem>
        <TopbarMenuItem
          color="inherit"
          aria-controls="navigation-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          sx={{ marginRight: 2 }}
        >
          EN
        </TopbarMenuItem>
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
      </TopbarNavigationWrapper>
      <TopbarButtonWrapper>
        <CustomButton variant="outlined" text="Login" />
        <CustomButton variant="contained" text="Get PureKeep" />
      </TopbarButtonWrapper>
    </TopbarWrapper>
  );
};

export default Topbar;
