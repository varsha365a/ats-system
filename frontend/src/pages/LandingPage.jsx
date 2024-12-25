import React, { useState } from "react";
import FileUpload from "../components/FileUpload"; // Import the FileUpload component
import './LandingPage.css'; // Add custom styles here

const LandingPage = ({ onFileUpload, onTextInput }) => {
  const [welcomeMessage] = useState(
    "Welcome to ATS Resume Grading! Upload your resume and see how well it matches with job requirements."
  );

  return (
    <div className="landing-page">
      <center><h1 class="logo">KeywordKraftr</h1></center>
      <header className="hero">
        <div className="hero-content">
          <h1>ATS Resume Grading</h1>
          <p>{welcomeMessage}</p>
          <div className="cta-btn-container">
            <a href="#upload"><button className="cta-btn">Get Started</button></a>
          </div>
        </div>
      </header>
      
      <section id="upload" className="upload-section">
        <h3>Upload Your Resume</h3>
        <p>Upload your resume as a PDF or paste the text directly in the box below:</p>
        <FileUpload onFileUpload={onFileUpload} onTextInput={onTextInput} />
      </section>

      <footer className="footer">
        <p>Powered by KeywordKraftr</p>
      </footer>
    </div>
  );
};

export default LandingPage;
