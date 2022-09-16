import { FaTimes } from "react-icons/fa";
import { CloseButtonStyled } from "./Close.Button.styled";

interface ICloseButton {
  handler: () => void;
}

const CloseButton = ({ handler }: ICloseButton) => (
  <CloseButtonStyled onClick={handler}>
    <FaTimes color="purple" />
  </CloseButtonStyled>
);

export default CloseButton;
