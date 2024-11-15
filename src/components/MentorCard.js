import React from 'react';
import { Link } from 'react-router-dom';
import './MentorCard.css';

// Importing all mentor images
import shiriImage from '../images/teacher1.jpg';
import shubhamImage from '../images/teacher4.jpg';
import aishaImage from '../images/teacher2.jpg';
import vidhyaImage from '../images/teacher3.jpg';
import raviImage from '../images/teacher5.jpg';
import ankitImage from '../images/teacher6.jpg';
import nehaImage from '../images/teacher7.jpg';
import priyaImage from '../images/teacher8.png';
import simranImage from '../images/teacher9.jpg';
import vikramImage from '../images/teacher10.jpg';

// Define the default image URL
const defaultImage = 'https://via.placeholder.com/80';

// Image map to associate mentor names with images
const imageMap = {
  "Shiri Agarwal": shiriImage,
  "Shubham Kumar": shubhamImage,
  "Aisha Verma": aishaImage,
  "Vidhya Sharma": vidhyaImage,
  "Ravi Sharma": raviImage,
  "Neha Patel": nehaImage,
  "Ankit Singh": ankitImage,
  "Priya Soni": priyaImage,
  "Vikram Mehra": vikramImage,
  "Simran Kaur": simranImage,
};

const MentorCard = ({ mentor, onMentorSelect }) => {
  if (!mentor) {
    return <div>Mentor data is not available</div>; // Handling missing mentor data
  }

  const { name, domain, experience, rating, availability } = mentor;

  // Fallback to defaultImage if the mentor's image is not available in imageMap
  const mentorImage = imageMap[name] || defaultImage;

  return (
    <div className="mentor-card" onClick={() => onMentorSelect(mentor)}>
      <div className="mentor-photo-container">
        <img src={mentorImage} alt={name} className="mentor-photo" />
      </div>
      <div className="mentor-info">
        <h2>
          <Link to={`/mentor/${name}`}>
            {name}
          </Link>
          {availability ? (
            <span className="availability-dot available" title="Available"></span>
          ) : (
            <span className="availability-dot unavailable" title="Unavailable"></span>
          )}
        </h2>
        <p>Domain: {domain}</p>
        <p>Experience: {experience} years</p>
        <p>Rating: {rating}/5</p>
      </div>
    </div>
  );
};

export default MentorCard;
