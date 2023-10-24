import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Table,
  Toast,
} from 'react-bootstrap';

import React, { useState } from 'react';
import { FaWifi } from 'react-icons/fa';

function Start() {
  const [scanning, setScanning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleScan = () => {
    setScanning(true);
    setSuccess(false);
    setError(null);

    // Simulating network scanning
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        setSuccess(true);
        setScanning(false);
      } else {
        setError(
          `Failed to scan network. Error code: ${Math.floor(random * 100)}`,
        );
        setScanning(false);
      }
    }, 2000);
  };

  return (
    <Container className="d-flex flex-column">
      <Row className="justify-content-between align-items-center">
        <h1 style={{ fontSize: '36px', margin: 0 }}>EasyPacket</h1>
        <Button
          variant={success ? 'success' : scanning ? 'warning' : 'secondary'}
          size="lg"
          className="d-flex align-items-center"
          onClick={handleScan}
          disabled={scanning}
        >
          {scanning ? (
            <span
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <FaWifi size={20} className="mr-2" />
          )}
          Scan Network
        </Button>
      </Row>
      <Form className="d-flex flex-column mt-3">
        <Form.Label style={{ fontSize: '16px', marginBottom: '10px' }}>
          IP Address
        </Form.Label>
        <Form.Control
          type="text"
          style={{
            fontSize: '16px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <Button variant="success" size="lg" className="mt-3">
          Send
        </Button>
      </Form>
      <div className="packets" style={{ marginTop: '20px' }}>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th
                style={{
                  fontSize: '16px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                Source
              </th>
              <th
                style={{
                  fontSize: '16px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                Destination
              </th>
              <th
                style={{
                  fontSize: '16px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                Protocol
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  fontSize: '16px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                192.168.1.1
              </td>
              <td
                style={{
                  fontSize: '16px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                192.168.1.2
              </td>
              <td
                style={{
                  fontSize: '16px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                TCP
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Toast
        show={success || error}
        onClose={() => {
          setSuccess(false);
          setError(null);
        }}
        delay={2000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200,
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="mr-auto">{success ? 'Success!' : 'Error'}</strong>
        </Toast.Header>
        <Toast.Body>
          {success ? 'Network scan completed successfully.' : error}
        </Toast.Body>
      </Toast>
    </Container>
  );
}

export default Start;
