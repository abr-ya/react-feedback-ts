import PropTypes from "prop-types";
import { StyledButton } from "./styled/Common.styled";

const Button = ({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
  style,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={isDisabled}
      version={version}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
