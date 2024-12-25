import React from "react";

const Feedback = ({ feedback }) => {
  return (
    <div className="feedback-container">
      <h3>Feedback</h3>
      <p>{feedback}</p>
    </div>
  );
};

export default Feedback;
