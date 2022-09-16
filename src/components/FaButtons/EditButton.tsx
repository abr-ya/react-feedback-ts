import { FaEdit } from "react-icons/fa";
import { EditButtonStyled } from "./EditButton.styled";

interface IEditButton {
  handler: () => void;
}

const EditButton = ({ handler }: IEditButton) => (
  <EditButtonStyled onClick={handler}>
    <FaEdit color="purple" />
  </EditButtonStyled>
);

export default EditButton;
