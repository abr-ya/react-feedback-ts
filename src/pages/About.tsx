import { Container, Card, Old, AboutList } from "../components/styled/Common.styled";

const About = () => (
  <Container>
    <Card>
      <h1>About page</h1>
      <p>Простое приложение, где можно оставить отзыв с оценкой.</p>
      <Old>Отзывы пока не сохраняются.</Old>
      <p>Отзывы читаются с бэка и сохраняются там же (REST API).</p>

      <AboutList>
        В приложении использованы (основное):
        <li>React</li>
        <li>Webpack 5</li>
        <li>TypeScript</li>
        <li>стилизация: Styled Components</li>
        <li>маршрутизация: React Router 6</li>
        <li>авторизация: Google OAuth</li>
        <li>запросы на сервер: Axios</li>
        <li>хранилище: React Context</li>
        <li>иконки: React Icons</li>
        <li>анимация: Framer Motion</li>
        <li>уведомления: React Toastify</li>
      </AboutList>
    </Card>
  </Container>
);

export default About;
