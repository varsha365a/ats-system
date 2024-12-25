const extractKeywords = (resumeText, jobKeywords) => {
    const matchedKeywords = jobKeywords.filter(keyword =>
      resumeText.toLowerCase().includes(keyword.toLowerCase())
    );
  
    const missingKeywords = jobKeywords.filter(keyword =>
      !resumeText.toLowerCase().includes(keyword.toLowerCase())
    );
  
    return {
      matchedKeywords,
      missingKeywords,
      score: (matchedKeywords.length / jobKeywords.length) * 100
    };
  };
  
  module.exports = { extractKeywords };
  