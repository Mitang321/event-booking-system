import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { Container, ListGroup } from "react-bootstrap";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <h2 className="text-center">Profile</h2>
      {user ? (
        <>
          <h3>Welcome, {user.email}</h3>
          <ListGroup>
            <ListGroup.Item>Booked Ticket 1</ListGroup.Item>
            <ListGroup.Item>Booked Ticket 2</ListGroup.Item>
            {}
          </ListGroup>
        </>
      ) : (
        <p className="text-center">You need to log in to see your profile.</p>
      )}
    </Container>
  );
};

export default Profile;
