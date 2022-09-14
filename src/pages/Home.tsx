import { List, Rating, FeedbackForm } from "../components";
import { Card, Container } from "../components/styled/Common.styled";

const Home = () => (
  <>
    <Container>
      <Card>
        <FeedbackForm />
      </Card>
      <Rating />
      <List />
    </Container>
  </>
);

export default Home;
