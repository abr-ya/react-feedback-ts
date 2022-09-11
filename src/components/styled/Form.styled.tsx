import styled, { css } from "styled-components/macro";

export const StyledForm = styled.form`
  margin: 10px auto;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 0;
  border-radius: 8px;
`;

export const Input = styled.input`
  flex-grow: 2;
  border: none;
  font-size: 16px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export const ValidationMessage = styled.div`
  padding-top: 10px;
  text-align: center;
  color: rebeccapurple;
`;

export const StyledRatingSet = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0 40px;
  list-style: none;
`;

export const RatingLi = styled.li`
  position: relative;
  background: #f4f4f4;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #eee solid;
  transition: 0.3s;

  &:hover {
    background: #ff6a95;
    color: #fff;
  }
`;

export const RatingLabel = styled.label<{ checked: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      background: #ff6a95;
      color: #fff;
    `}
`;

export const RatingInput = styled.input`
  opacity: 0;
`;
