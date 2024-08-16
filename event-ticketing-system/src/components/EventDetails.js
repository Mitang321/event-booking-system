import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const EventDetails = ({ events, onUpdateEvent }) => {
  const { id } = useParams();
  const location = useLocation();
  const event =
    events.find((event) => event.id === parseInt(id)) || location.state;

  const [selectedSeats, setSelectedSeats] = useState(Array(50).fill(false));

  const handleSeatClick = (index) => {
    const updatedSeats = [...selectedSeats];
    updatedSeats[index] = !updatedSeats[index];
    setSelectedSeats(updatedSeats);
  };

  const handleBookSeats = () => {
    const updatedEvent = { ...event, reserved: selectedSeats };
    onUpdateEvent(updatedEvent);
    alert("Seats booked successfully!");
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {event.date}
        </Card.Text>
        <Card.Text>
          <strong>Location:</strong> {event.location}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {event.description}
        </Card.Text>
        <h5>Seat Selection:</h5>
        <Row>
          {event.reserved.map((isReserved, index) => (
            <Col key={index} xs={2} className="mb-2">
              <Button
                variant={
                  isReserved
                    ? "danger"
                    : selectedSeats[index]
                    ? "success"
                    : "secondary"
                }
                disabled={isReserved}
                onClick={() => handleSeatClick(index)}
              >
                {index + 1}
              </Button>
            </Col>
          ))}
        </Row>
        <Button variant="primary" className="mt-4" onClick={handleBookSeats}>
          Book Selected Seats
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventDetails;
