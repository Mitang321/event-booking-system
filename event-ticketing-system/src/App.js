import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import EventList from "./components/EventList";
import { events } from "./data/events";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Event Ticketing System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col>
            <h2>Upcoming Events</h2>
            <EventList events={events} />
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <Container>
          <p>&copy; 2024 Event Ticketing System</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
