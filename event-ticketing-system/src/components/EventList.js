import React from "react";
import { Card, Button } from "react-bootstrap";

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <Card key={event.id} className="mb-3">
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {event.date}
            </Card.Subtitle>
            <Card.Text>{event.description}</Card.Text>
            <Button variant="primary" href={`#event-${event.id}`}>
              View Details
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">{event.location}</Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default EventList;
