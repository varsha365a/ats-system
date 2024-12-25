import React, { useState } from "react";

const FileUpload = ({ onFileUpload, onTextInput }) => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    onFileUpload(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    onTextInput(e.target.value);
  };

  return (
    <div className="upload-container">
      {/* <h3>Upload Your Resume</h3> */}
      <div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          aria-label="Upload PDF Resume"
        />

      </div>
      <textarea
        placeholder="Or paste resume text here"
        value={text}
        onChange={handleTextChange}
        rows="6"
        cols="50"
        aria-label="Paste Resume Text"
        width="10px"
      />
    </div>
  );
};

export default FileUpload;
