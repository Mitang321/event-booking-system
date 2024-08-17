import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/AddEvent";
import { events as initialEvents } from "./data/events";
import "./App.css";

function App() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : initialEvents;
  });

  const navigate = useNavigate();

  const handleAddEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    navigate("/events");
  };

  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Event Ticketing System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/add-event">Add Event</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList events={events} />} />
          <Route
            path="/event/:id"
            element={
              <EventDetails events={events} onUpdateEvent={handleUpdateEvent} />
            }
          />
          <Route
            path="/add-event"
            element={<AddEvent onAddEvent={handleAddEvent} />}
          />
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
