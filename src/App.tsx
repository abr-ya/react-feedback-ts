import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/styled/Common.styled";
import { Header } from "./components";
import { Home, About, Error404 } from "./pages";
import { FeedbackProvider } from "context/FeedbackContext";

const App = () => (
  <FeedbackProvider>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </FeedbackProvider>
);

export default App;
