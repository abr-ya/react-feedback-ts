import { List, Rating, FeedbackForm, GoogleLogin } from "../components";
import { Card, Container } from "../components/styled/Common.styled";

const Home = () => (
  <>
    <Container>
      <Card>
        <GoogleLogin />
      </Card>
      <Card>
        <FeedbackForm />
      </Card>
      <Rating />
      <List />
    </Container>
  </>
);

export default Home;
