import styled, { createGlobalStyle } from "styled-components/macro";
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
  top: 20px;
  right: 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff6a95;
  }
`;
