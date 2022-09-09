import styled, { css, createGlobalStyle } from "styled-components/macro";
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

export const StyledButton = styled.button`
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 100px;
  height: 40px;
  cursor: pointer;

  ${(props) =>
    props.version === "primary" &&
    css`
      background-color: #202142;
    `}
  ${(props) =>
    props.version === "secondary" &&
    css`
      background-color: #ff6a95;
    `}

  &:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  &:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }
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
