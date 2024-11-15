import React, { useState, useEffect } from 'react';
import MentorCard from './MentorCard';  // Importing the MentorCard component
import mentorsData from './mentorsData.json';  // Assuming mentorsData.json contains an array of mentors

const MentorList = ({ onMentorSelect }) => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state

  // Use useEffect to load the data when the component mounts
  useEffect(() => {
    // Simulating async data fetch
    setTimeout(() => {
      setMentors(mentorsData);
      setLoading(false);
    }, 500);  // Simulating a delay
  }, []);

  if (loading) {
    return <div>Loading mentors...</div>;  // Show loading message while data is being fetched
  }

  return (
    <div className="mentor-list">
      {mentors.length === 0 ? (
        <div>No mentors available.</div>  // Handle case when no mentors are available
      ) : (
        mentors.map((mentor) => (
          <MentorCard
            key={mentor.name}  // Make sure each mentor card has a unique key
            mentor={mentor}
            onMentorSelect={onMentorSelect}  // Passing the onMentorSelect function to MentorCard
          />
        ))
      )}
    </div>
  );
};

export default MentorList;
