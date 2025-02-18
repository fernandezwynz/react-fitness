import { useEffect } from 'react';
import { useWorkoutContext } from '../context/WorkoutContext';

const Workouts = () => {
  const { workouts, setWorkouts } = useWorkoutContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://fitnessapp-api-ln8u.onrender.com/workouts');
      const data = await response.json();
      setWorkouts(data);
    };

    fetchWorkouts();
  }, [setWorkouts]);

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;