import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { events } from "../data/events";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchedEvent = events.find((e) => e.id === parseInt(id));
    if (fetchedEvent) {
      setEvent(fetchedEvent);
    } else {
      console.error("Event not found");
    }
  }, [id]);

  const handleSeatClick = (index) => {
    if (event.reserved[index]) return;

    setSelectedSeats((prevSelected) => {
      const newSelection = [...prevSelected];
      if (newSelection.includes(index)) {
        newSelection.splice(newSelection.indexOf(index), 1);
      } else {
        newSelection.push(index);
      }
      return newSelection;
    });
  };

  const handleReserveSeats = () => {
    if (!event) return;

    const updatedSeats = [...event.seats];
    const updatedReserved = [...event.reserved];

    selectedSeats.forEach((index) => {
      updatedSeats[index] = true;
      updatedReserved[index] = true;
    });

    setEvent({ ...event, seats: updatedSeats, reserved: updatedReserved });
    setSelectedSeats([]);
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {event.date}
          </Card.Subtitle>
          <Card.Text>{event.description}</Card.Text>
          <Button variant="primary" href="/">
            Back to Events
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{event.location}</Card.Footer>
      </Card>

      <h3>Select Seats</h3>
      <Row>
        {event.seats.map((_, index) => (
          <Col xs={2} className="mb-2" key={index}>
            <Button
              variant={
                event.reserved[index]
                  ? "secondary"
                  : selectedSeats.includes(index)
                  ? "success"
                  : "outline-secondary"
              }
              onClick={() => handleSeatClick(index)}
              disabled={event.reserved[index]}
            >
              {index + 1}
            </Button>
          </Col>
        ))}
      </Row>
      <Button
        variant="primary"
        onClick={handleReserveSeats}
        disabled={selectedSeats.length === 0}
      >
        Reserve Seats
      </Button>
    </div>
  );
}

export default EventDetails;
