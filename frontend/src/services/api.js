import axios from 'axios';

const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append('resume', file);

  const response = await axios.post('http://localhost:5000/api/upload', formData);
  return response.data.text;
};

const getKeywordMatch = async (resumeText, jobTitle) => {
  const response = await axios.post('http://localhost:5000/api/match-keywords', {
    resumeText,
    jobTitle
  });
  return response.data;
};

export { uploadResume, getKeywordMatch };
