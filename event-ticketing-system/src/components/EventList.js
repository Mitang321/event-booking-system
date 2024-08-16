import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const EventList = ({ events }) => {
  return (
    <Row>
      {events.map((event) => (
        <Col md={6} lg={4} key={event.id} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>
                <strong>Date:</strong> {event.date}
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> {event.location}
              </Card.Text>
              <Link to={`/event/${event.id}`} state={event}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default EventList;
