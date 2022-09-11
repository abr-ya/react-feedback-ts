import { ReactNode } from "react";
import Button from "components/Button/Button";
import { BtnContainer, DialogContainer, DialogRight, MainPart, Overlay } from "./Dialog.styled";
import { CloseButton } from "components";

interface IDialog {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onYes: () => void;
  img?: string;
  textNo?: string;
  textYes?: string;
}

const Dialog = ({ open, onClose, onYes, img, children, textNo, textYes }: IDialog) => {
  if (!open) return null;

  const yesHandler = () => {
    onYes();
    onClose();
  };

  const renderImg = (img: string | undefined) => (img ? <img src={img} alt="/" /> : null);

  return (
    <Overlay onClick={onClose}>
      <DialogContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {renderImg(img)}
        <DialogRight>
          <CloseButton handler={onClose} />
          <MainPart>{children}</MainPart>
          <BtnContainer>
            <Button version="primary" onClick={yesHandler}>
              {textYes || "Delete"}
            </Button>
            <Button version="gray" onClick={onClose}>
              {textNo || "Cancel"}
            </Button>
          </BtnContainer>
        </DialogRight>
      </DialogContainer>
    </Overlay>
  );
};

export default Dialog;
