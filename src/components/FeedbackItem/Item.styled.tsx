import styled, { css } from "styled-components/macro";

export const BlockNum = styled.div`
  background: #ff6a95;
  color: #fff;
  position: relative;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #eee solid;
  transition: 0.3s;
  position: absolute;
  top: -10px;
  left: -10px;
`;

export const BlockText = styled.div<{ reverse?: boolean }>`
  background-color: #fff;

  ${(props) =>
    props.reverse &&
    css`
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
    `}
`;
