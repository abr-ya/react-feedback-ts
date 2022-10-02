import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.4);
  color: #ff6a95;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const NavLinkBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  margin: 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff6a95;
  }
`;
