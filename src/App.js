import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { WorkoutProvider } from './context/WorkoutContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Workouts from './pages/Workouts';
import HomePage from './pages/HomePage';
import UserDetails from './pages/UserDetails';
import './App.css';

function App() {
  const [user, setUser] = useState({ id: null });

  function unsetUser() {
    localStorage.clear();
    setUser({ id: null });
  }

  useEffect(() => {
    fetch(`https://fitnessapp-api-ln8u.onrender.com/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setUser({ id: data._id });
        } else {
          setUser({ id: null });
        }
      });
  }, []);

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user]);

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <WorkoutProvider>
        <Router>
          <Navbar bg="light" expand="lg" className="navbar">
            <Container>
              <Navbar.Brand href="/">Fitness App</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users/login">Login</Nav.Link>
                <Nav.Link href="/users/register">Register</Nav.Link>
                <Nav.Link href="/workouts">Workouts</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/register" element={<Register />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/users/details" element={<UserDetails />} />
            </Routes>
          </Container>
        </Router>
      </WorkoutProvider>
    </UserProvider>
  );
}

export default App;
