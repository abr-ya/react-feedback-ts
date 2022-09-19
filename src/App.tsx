import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/styled/Common.styled";
import { Header } from "./components";
import { Home, About, Error404 } from "./pages";
import { FeedbackProvider } from "context/FeedbackContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { gapiInit } from "services/gapi";
import { UserProvider } from "context/UserContext";

const App = () => {
  useEffect(() => {
    gapiInit();
  }, []);

  return (
    <UserProvider>
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
        <ToastContainer />
      </FeedbackProvider>
    </UserProvider>
  );
};

export default App;
