import styled, { createGlobalStyle } from "styled-components/macro";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #2bbb;
    color: #fff;
    line-height: 1.6;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 20px;
`;

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

export const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px 50px;
  margin: 20px 0;
  position: relative;
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
