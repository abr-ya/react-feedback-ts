import { Container } from "components/styled/Common.styled";
import { StyledHeader } from "./Header.styled";
import NavIcon from "./NavIcon";

const Header = () => {
  return (
    <>
      <NavIcon />
      <Container>
        <StyledHeader>
          <h2>Feedback App</h2>
        </StyledHeader>
      </Container>
    </>
  );
};

export default Header;
