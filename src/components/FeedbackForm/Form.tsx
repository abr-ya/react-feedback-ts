import { useState, useEffect, FormEvent, useContext } from "react";
import { StyledForm, Group, Input, ValidationMessage } from "./Form.styled";
import { Button } from "../index";
import RatingSet from "./RatingSet";
import FeedbackContext from "context/FeedbackContext";
import { toast } from "react-toastify";
import { topRight3sec } from "utils/toastOptions";
import UserContext from "context/UserContext";

const Form = () => {
  const { addFeedback, currentItem, updateFeedback } = useContext(FeedbackContext);
  const { user } = useContext(UserContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (currentItem) {
      setIsBtnDisabled(false);
      setText(currentItem.text);
      setRating(currentItem.rating);
    }
  }, [currentItem]);

  const inputChangeHandler = (value: string) => {
    // validation
    if (value === "") {
      setIsBtnDisabled(true);
      setMessage("");
    } else if (value.trim().length < 10) {
      setMessage("Text must be at least 10 characters");
      setIsBtnDisabled(true);
    } else {
      setMessage("");
      setIsBtnDisabled(!rating);
    }

    setText(value);
  };

  useEffect(() => {
    setIsBtnDisabled(!rating || text.trim().length < 10);
  }, [rating]);

  const resetForm = () => {
    setText("");
    setRating(0);
    setIsBtnDisabled(true);
    setMessage("");
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      // при правильной блокировке кнопки сюда мы не попадаем
      toast.error("Необходимо поставить оценку!");
      return;
    }
    if (text.trim().length > 10) {
      // не редактируем, а создаём
      if (!currentItem) {
        const newFeedback = {
          id: +new Date(),
          text,
          rating,
        };
        addFeedback(newFeedback);
        toast("🦄 Спасибо за ваш отзыв!", topRight3sec);
      } else {
        console.log("edit!");
        const { id } = currentItem;
        updateFeedback({ id, text, rating });
      }
      resetForm();
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <h4>How would you rate us, {user?.userName || "гость"}?!</h4>
      <RatingSet select={setRating} selected={rating} />
      <Group>
        <Input
          type="text"
          value={text}
          placeholder="Write a review"
          onChange={(e) => inputChangeHandler(e.target.value)}
        />
        <Button isDisabled={isBtnDisabled} isSubmit>
          {!currentItem ? "Send" : "Update"}
        </Button>
      </Group>
      <ValidationMessage>{message}</ValidationMessage>
    </StyledForm>
  );
};

export default Form;
