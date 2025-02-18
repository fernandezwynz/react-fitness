import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutCard from '../components/WorkoutCard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const WorkoutPage = () => {
  const { workouts, addWorkout } = useContext(WorkoutContext);
  const [show, setShow] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    duration: '',
    dateAdded: '',
    status: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout({ ...newWorkout, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(newWorkout);
    handleClose();
  };

  return (
    <div>
      <Button id="addWorkout" onClick={handleShow}>
        Add Workout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formWorkoutName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newWorkout.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formWorkoutDuration">
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Control
                type="number"
                name="duration"
                value={newWorkout.duration}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formWorkoutDateAdded">
              <Form.Label>Date Added</Form.Label>
              <Form.Control
                type="date"
                name="dateAdded"
                value={newWorkout.dateAdded}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formWorkoutStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={newWorkout.status}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Workout
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {workouts.map((workout, index) => (
        <WorkoutCard key={index} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutPage;