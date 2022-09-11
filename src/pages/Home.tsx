import { useState } from "react";
import { Card, Container } from "../components/styled/Common.styled";
import { List, Rating, FeedbackForm } from "../components";
import FeedbackData from "../data/FeedbackData";
import { AddHandlerType, IFeedbackItem } from "interfaces";

const Home = () => {
  const [feedback, setFeedback] = useState<IFeedbackItem[]>(FeedbackData);
  const deleteHandler = (id: number) => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const addHandler: AddHandlerType = (item) => {
    setFeedback((prev) => [item, ...prev]);
    // eslint-disable-next-line no-alert
    alert("Спасибо за ваш отзыв!");
  };

  return (
    <Container>
      <Card>
        <FeedbackForm addHandler={addHandler} />
      </Card>
      <Rating feedback={feedback} />
      <List feedback={feedback} deleteHandler={deleteHandler} />
    </Container>
  );
};

export default Home;
