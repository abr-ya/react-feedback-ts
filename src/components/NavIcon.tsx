import { useLocation } from "react-router-dom";
import { FaQuestion, FaHome } from "react-icons/fa";
import { NavLinkBlock, NavLink } from "./styled/Common.styled";

const NavIcon = () => {
  const { pathname } = useLocation();
  const isAbout = ["/about", "/about/"].includes(pathname);

  return (
    <NavLinkBlock>
      <NavLink to={isAbout ? "/" : "/about"}>
        {isAbout ? <FaHome size={30} /> : <FaQuestion size={30} />}
      </NavLink>
    </NavLinkBlock>
  );
};

export default NavIcon;
