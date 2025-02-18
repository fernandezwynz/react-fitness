import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Card from 'react-bootstrap/Card';

const UserDetails = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch('https://fitnessapp-api-ln8u.onrender.com/users/details', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserDetails(data);
      });
  }, []);

  return (
    <div>
      {userDetails ? (
        <Card>
          <Card.Body>
            <Card.Title>User Details</Card.Title>
            <Card.Text>
              <strong>ID:</strong> {userDetails._id}
              <br />
              <strong>Email:</strong> {userDetails.email}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;