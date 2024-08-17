import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, Button, Row, Col, Alert } from "react-bootstrap";

const EventDetails = ({ events, onUpdateEvent }) => {
  const { id } = useParams();
  const location = useLocation();
  const event =
    events.find((event) => event.id === parseInt(id)) || location.state;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const seating = Array(5).fill(Array(10).fill(false));
  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}-${seatIndex}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookTickets = () => {
    if (selectedSeats.length > 0) {
      const updatedEvent = {
        ...event,
        reserved: event.reserved + selectedSeats.length,
      };
      onUpdateEvent(updatedEvent);
      alert(`Tickets booked successfully! Total cost: ₹${totalCost}`);
    }
  };

  React.useEffect(() => {
    if (event) {
      const cost = selectedSeats.length * event.ticketPrice;
      setTotalCost(cost);
    }
  }, [selectedSeats, event]);

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
        <Card.Text>
          <strong>Ticket Price:</strong> ₹{event.ticketPrice}
        </Card.Text>

        <div className="mt-4">
          <h5>Select Your Seats:</h5>
          <div className="seating-chart">
            {seating.map((row, rowIndex) => (
              <Row key={rowIndex}>
                {row.map((seat, seatIndex) => {
                  const seatId = `${rowIndex}-${seatIndex}`;
                  return (
                    <Col key={seatId}>
                      <Button
                        variant={
                          selectedSeats.includes(seatId)
                            ? "success"
                            : "outline-secondary"
                        }
                        onClick={() => handleSeatClick(rowIndex, seatIndex)}
                        className="seat-button mb-2"
                      >
                        {seatId}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            ))}
          </div>
        </div>

        <Alert variant="info" className="mt-4">
          Total Cost: ₹{totalCost}
        </Alert>

        <Button variant="primary" className="mt-4" onClick={handleBookTickets}>
          Book Tickets
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventDetails;
