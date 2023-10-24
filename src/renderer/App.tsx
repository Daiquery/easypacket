import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './pages/Start';

function Main() {
  return (
    <div className="start-page">
      <Container>
        <h1>EasyPacket</h1>
      </Container>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/app" element={<Start />} />

      </Routes>
    </Router>
  );
}
