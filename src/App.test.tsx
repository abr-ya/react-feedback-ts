import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders feedback on main page", () => {
  render(<App />);
  const reactElement = screen.getByText(/feedback/i);
  expect(reactElement).toBeInTheDocument();
});
