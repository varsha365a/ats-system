import React from "react";

const KeywordMatchResults = ({ results }) => {
  return (
    <div className="match-results">
      <h3>Keyword Match Results</h3>
      <p>Score: {results.score}</p>
      <div>
        <h4>Matched Keywords:</h4>
        <ul>
          {results.matchedKeywords.map((kw, idx) => (
            <li key={idx}>{kw}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Missing Keywords:</h4>
        <ul>
          {results.missingKeywords.map((kw, idx) => (
            <li key={idx}>{kw}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordMatchResults;
