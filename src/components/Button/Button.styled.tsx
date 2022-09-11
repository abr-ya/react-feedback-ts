import styled, { css } from "styled-components/macro";

export const StyledButton = styled.button<{
  version: "primary" | "secondary" | "gray";
}>`
  border: 0;
  border-radius: 8px;
  color: #fff;
  min-width: 100px;
  height: 40px;
  margin: 0;
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
  ${(props) =>
    props.version === "gray" &&
    css`
      background-color: gainsboro;
    `}

  &:hover {
    transform: scale(0.95);
    opacity: 0.9;
  }

  &:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }
`;
