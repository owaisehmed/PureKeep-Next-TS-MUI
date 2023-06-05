import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import { HeaderWrapper } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Topbar />
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
