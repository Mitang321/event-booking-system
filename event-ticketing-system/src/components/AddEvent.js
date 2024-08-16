import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const AddEvent = ({ onAddEvent }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Math.floor(Math.random() * 10000),
      name,
      date,
      location,
      description,
      seats: Array(50).fill(false),
      reserved: Array(50).fill(false),
    };
    onAddEvent(newEvent);
    setName("");
    setDate("");
    setLocation("");
    setDescription("");
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add New Event</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEventName" className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEventDate" className="mb-3">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEventLocation" className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEventDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Event
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddEvent;
