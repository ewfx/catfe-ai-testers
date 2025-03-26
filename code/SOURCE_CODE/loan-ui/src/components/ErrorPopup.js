// src/components/ErrorPopup.js

import React from 'react';

function ErrorPopup({ error, onClose }) {
  if (!error) {
    return null; // Don't render if there's no error
  }

  return (
    <div className="error-popup-overlay">
      <div className="error-popup">
        <h2>Error</h2>
        <p>{error.message}</p>
        {error.response && (
          <div>
            <p>Status: {error.response.status}</p>
            <p>Data: {JSON.stringify(error.response.data)}</p>
          </div>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ErrorPopup;