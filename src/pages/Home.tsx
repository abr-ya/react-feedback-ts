import { useGetUser } from "context/UserContext";
import { List, Rating, FeedbackForm, GoogleLogin } from "../components";
import { Card, Container } from "../components/styled/Common.styled";

const Home = () => {
  const user = useGetUser();

  return (
    <>
      <Container>
        <Card>
          <GoogleLogin />
        </Card>
        {user?.userId && (
          <Card>
            <FeedbackForm />
          </Card>
        )}
        <Rating />
        <List />
      </Container>
    </>
  );
};

export default Home;
