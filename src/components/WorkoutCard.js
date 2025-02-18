import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const WorkoutCard = ({ workout, onUpdate, onDelete, onComplete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{workout.name}</Card.Title>
        <Card.Text>
          Duration: {workout.duration} minutes
          <br />
          Date Added: {new Date(workout.dateAdded).toLocaleDateString()}
          <br />
          Status: {workout.status}
        </Card.Text>
        <Button variant="success" onClick={() => onComplete(workout._id)}>
          Complete
        </Button>
        <Button variant="warning" onClick={() => onUpdate(workout._id, { ...workout, status: 'Updated' })}>
          Update
        </Button>
        <Button variant="danger" onClick={() => onDelete(workout._id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCard;