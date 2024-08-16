import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <Row>
        {events.map((event) => (
          <Col md={4} key={event.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {event.date}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Link to={`/event/${event.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">{event.location}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventList;
