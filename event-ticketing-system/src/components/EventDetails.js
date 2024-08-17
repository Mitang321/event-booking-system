import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, Button, Row, Col, Alert, Modal } from "react-bootstrap";
import Payment from "./Payment";

const EventDetails = ({ events, onUpdateEvent }) => {
  const { id } = useParams();
  const location = useLocation();
  const event =
    events.find((event) => event.id === parseInt(id)) || location.state;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const seating = [
    [false, true, false, false, true, false, false, true, false, false],
    [false, false, false, true, false, false, false, true, false, false],
    [false, false, true, false, false, true, false, false, true, false],
    [false, false, false, false, false, false, true, false, false, false],
    [true, false, false, false, true, false, false, false, false, true],
  ];

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}-${seatIndex}`;
    if (seating[rowIndex][seatIndex]) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookTickets = () => {
    setShowModal(true);
  };

  const handleConfirmBooking = () => {
    setPaymentConfirmed(true);
    setShowModal(false);
    const updatedEvent = {
      ...event,
      reserved: event.reserved + selectedSeats.length,
    };
    onUpdateEvent(updatedEvent);
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
    <>
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
                  {row.map((isBooked, seatIndex) => {
                    const seatId = `${rowIndex}-${seatIndex}`;
                    return (
                      <Col key={seatId}>
                        <Button
                          variant={
                            isBooked
                              ? "danger"
                              : selectedSeats.includes(seatId)
                              ? "success"
                              : "outline-secondary"
                          }
                          onClick={() => handleSeatClick(rowIndex, seatIndex)}
                          className="seat-button mb-2"
                          disabled={isBooked}
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

          <Button
            variant="primary"
            className="mt-4"
            onClick={handleBookTickets}
          >
            Book Tickets
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Selected Seats:</strong> {selectedSeats.join(", ")}
          </p>
          <p>
            <strong>Total Cost:</strong> ₹{totalCost}
          </p>
          <Payment
            totalCost={totalCost}
            onConfirmPayment={handleConfirmBooking}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {paymentConfirmed && (
        <Alert variant="success" className="mt-4">
          Your booking is confirmed! Enjoy the event.
        </Alert>
      )}
    </>
  );
};

export default EventDetails;
