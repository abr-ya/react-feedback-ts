import { StyledHeader, Container } from "./styled/Common.styled";
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
