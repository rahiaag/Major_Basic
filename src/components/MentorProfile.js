import React from 'react';
import './MentorCard.css'; // Import the same styling for consistency
import { Link } from 'react-router-dom';

// Define the default image URL in case the mentor doesn't have an image
const defaultImage = 'https://via.placeholder.com/150';

// Image map to associate mentor names with images (same as in MentorCard.js)
const imageMap = {
  "Shiri Agarwal": require('../images/teacher1.jpg'),
  "Shubham Kumar": require('../images/teacher4.jpg'),
  "Aisha Verma": require('../images/teacher2.jpg'),
  "Vidhya Sharma": require('../images/teacher3.jpg'),
  "Ravi Sharma": require('../images/teacher5.jpg'),
  "Neha Patel": require('../images/teacher7.jpg'),
  "Ankit Singh": require('../images/teacher6.jpg'),
  "Priya Soni": require('../images/teacher8.png'),
  "Vikram Mehra": require('../images/teacher10.jpg'),
  "Simran Kaur": require('../images/teacher9.jpg'),
};

const MentorProfile = ({ mentor }) => {
  if (!mentor) return <div>No mentor selected.</div>;

  const { name, domain, experience, rating, bio, skills, availability } = mentor;

  // Use the default image if imageUrl is not available
  const mentorImage = imageMap[name] || defaultImage;

  return (
    <div className="mentor-profile">
      <div className="mentor-photo-container">
        <img src={mentorImage} alt={name} className="mentor-photo" />
      </div>
      <div className="mentor-info">
        <h2>{name}</h2>
        {availability ? (
          <span className="availability-dot available" title="Available"></span>
        ) : (
          <span className="availability-dot unavailable" title="Unavailable"></span>
        )}
        <p>Domain: {domain}</p>
        <p>Experience: {experience} years</p>
        <p>Rating: {rating}/5</p>
        <div className="bio">
          <strong>Bio:</strong>
          <p>{bio || 'No bio available'}</p> {/* Fallback for missing bio */}
        </div>
        <div className="skills">
          <strong>Skills:</strong>
          <ul>
            {Array.isArray(skills) && skills.length > 0
              ? skills.map((skill, index) => <li key={index}>{skill}</li>)
              : <li>No skills listed</li>} {/* Fallback if skills are missing or not an array */}
          </ul>
        </div>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
};

export default MentorProfile;
