import React, { useState } from 'react';

const UploadButton = () => {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = () => {
    setUploading(true);
    setMessage('Uploading...');
    // Simulate an upload
    setTimeout(() => {
      setUploading(false);
      setMessage('Upload successful!');
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadButton;