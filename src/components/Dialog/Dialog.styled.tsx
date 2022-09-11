import styled from "styled-components/macro";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const DialogContainer = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;

  & > img {
    width: 250px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const DialogRight = styled.div`
  width: 100%;
`;

export const CloseButton = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const MainPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 1rem;
`;
