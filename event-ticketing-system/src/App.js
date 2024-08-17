import React, { useState, useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/AddEvent";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { events as initialEvents } from "./data/events";
import { UserContext, UserProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : initialEvents;
  });

  const { user } = useContext(UserContext);
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
              {user ? (
                <>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <h2 className="text-center">
                Welcome to the Event Ticketing System
              </h2>
            }
          />
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
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
