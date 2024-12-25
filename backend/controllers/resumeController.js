const fs = require('fs');
const { extractKeywords } = require('../utils/keywordMatcher');

// Process uploaded resume
const processResume = (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Simulate resume text extraction (can use libraries for PDF parsing later)
    const resumeText = fs.readFileSync(file.path, 'utf-8'); // Assumes plain text file

    // Example: Remove uploaded file after reading
    fs.unlinkSync(file.path);

    res.status(200).json({ text: resumeText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing resume' });
  }
};

module.exports = { processResume };
