import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Welcome to the Event Ticketing System</h1>
          <p className="lead">Discover and book your favorite events easily!</p>
          <Button variant="light" size="lg" href="/events">
            Explore Events
          </Button>
        </Container>
      </div>

      <Container className="mt-5">
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Browse Events</Card.Title>
                <Card.Text>
                  Find and explore a variety of events happening near you.
                </Card.Text>
                <Button variant="primary" href="/events">
                  Browse Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Book Tickets</Card.Title>
                <Card.Text>
                  Secure your spot by booking tickets for your chosen events.
                </Card.Text>
                <Button variant="primary" href="/events">
                  Book Tickets
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Manage Bookings</Card.Title>
                <Card.Text>
                  View and manage your event bookings all in one place.
                </Card.Text>
                <Button variant="primary" href="/profile">
                  Manage Bookings
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/12745513/pexels-photo-12745513.jpeg?cs=srgb&dl=pexels-caleboquendo-12745513.jpg&fm=jpg"
              alt="Event 1"
            />
            <Carousel.Caption>
              <h3>Music Concert</h3>
              <p>Delhi</p>
              <Button variant="light" href="/events">
                See More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/live-music-neon-sign-vector-live-music-design-template-neon-sign_639785-66809.jpg"
              alt="Music Concert "
            />
            <Carousel.Caption>
              <h3>Music Concert </h3>
              <p>Mumbai</p>
              <Button variant="light" href="/events">
                See More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
