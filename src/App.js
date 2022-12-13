import "./resources/styles/main.css";
import { useDatabase } from "./hooks";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardGrid from "./components/organisms/CardGrid/CardGrid";
import Hero from "./components/organisms/Hero";
const App = () => {
  const [data, isLoaded] = useDatabase("records");

  return (
    <Container fluid>
      <Row>
        <Hero additionalClasses={["bg-highlight-dark-50", "padding-m"]} />
      </Row>
      <Row>
        <Col lg={11}>{isLoaded ? <CardGrid data={data} /> : ""}</Col>
      </Row>

      <Row>
        <Col>{isLoaded && JSON.stringify(data)}</Col>
      </Row>
    </Container>
  );
};
export default App;
