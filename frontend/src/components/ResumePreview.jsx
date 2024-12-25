import React from "react";

const ResumePreview = ({ text }) => {
  return (
    <div className="resume-preview">
      <h3>Resume Preview</h3>
      <pre>{text}</pre>
    </div>
  );
};

export default ResumePreview;
