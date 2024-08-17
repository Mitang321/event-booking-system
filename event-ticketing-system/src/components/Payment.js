import React, { useState } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";

const Payment = ({ totalCost, onConfirmPayment }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv) {
      setPaymentSuccess(true);
      onConfirmPayment();
    } else {
      alert("Please fill in all payment details.");
    }
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Payment</Card.Title>
        {paymentSuccess ? (
          <Alert variant="success">
            Payment Successful! Your tickets are confirmed.
          </Alert>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handlePayment}>
              Pay ₹{totalCost}
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
};

export default Payment;
