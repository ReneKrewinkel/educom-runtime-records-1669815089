import "./resources/styles/main.css";
import { useDatabase } from "./hooks";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./components/organisms/Navigation/Navigation";
import Hero from "./components/organisms/Hero";
import CardGrid from "./components/organisms/CardGrid/CardGrid";
import Footer from "./components/organisms/Footer/Footer";

const App = () => {
  const [data, isLoaded] = useDatabase("records");

  return (
    <Container fluid>
      <Navigation />
      <Row>
        <Hero additionalClasses={["bg-highlight-dark-50", "padding-m"]} />
      </Row>
      <Row>
        <Col lg={11}>{isLoaded ? <CardGrid data={data} /> : ""}</Col>
      </Row>
      <Row>
        <Footer additionalClasses={["bg-highlight-dark-50"]} />
      </Row>
    </Container>
  );
};
export default App;
