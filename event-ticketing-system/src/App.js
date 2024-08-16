import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import { events } from "./data/events";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Event Ticketing System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={<h2>Welcome to the Event Ticketing System</h2>}
          />
          <Route path="/events" element={<EventList events={events} />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
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
