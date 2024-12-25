import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ResumePreview from "./components/ResumePreview";
import KeywordMatchResults from "./components/KeywordMatchResults";
import Feedback from "./components/Feedback";
import { uploadResume, getKeywordMatch } from "./services/api";
import "./index.css";

const App = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [matchResults, setMatchResults] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleFileUpload = async (file) => {
    setResumeFile(file);
    const fileText = await uploadResume(file);  // Assuming backend returns text from file
    setResumeText(fileText);
    getMatchResults(fileText);
  };

  const handleTextInput = async (text) => {
    setResumeText(text);
    getMatchResults(text);
  };

  const getMatchResults = async (text) => {
    const results = await getKeywordMatch(text, "Software Engineer"); // Example job title
    setMatchResults(results);
    setFeedback(generateFeedback(results));  // Generate feedback based on results
  };

  const generateFeedback = (results) => {
    // Implement your feedback generation logic
    return `Good match! Your resume has ${results.score} out of 10.`;
  };

  return (
    <div className="app-container">
      <LandingPage onFileUpload={handleFileUpload} onTextInput={handleTextInput} />
      {resumeText && <ResumePreview text={resumeText} />}
      {matchResults && <KeywordMatchResults results={matchResults} />}
      {feedback && <Feedback feedback={feedback} />}
    </div>
  );
};

export default App;
