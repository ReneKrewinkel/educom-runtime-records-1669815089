import "./resources/styles/main.css";
import { useDatabase } from "./hooks";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faFloppyDisk,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faShoppingCart, faFloppyDisk, faCoffee);

import Logo from "./components/atoms/Logo";

const App = () => {
  const [data, isLoaded] = useDatabase("records");

  return (
    <Container fluid>
      <Row>
        <Col lg={11}>
          <Logo />
        </Col>
        <Col lg={1}>
          <FontAwesomeIcon icon={faCoffee} style={{ fontSize: 40 }} />
        </Col>
      </Row>

      <Row>
        <Col>{isLoaded && JSON.stringify(data)}</Col>
      </Row>
    </Container>
  );
};
export default App;
