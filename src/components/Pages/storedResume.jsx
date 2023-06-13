import React from 'react';

const StoredResumes = () => {

  return (
    <div>
        {localStorage.storedResume}
    </div>
  );
};

export default StoredResumes;