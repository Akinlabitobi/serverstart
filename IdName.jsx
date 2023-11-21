import React, { useState } from 'react';

const IdName = () => {
  const [nextId, setNextId] = useState(1);

  // Function to get the next ID and update the state
  const getNextId = () => {
    setNextId(prevId => prevId + 1);
    return nextId;
  };

  // Usage
  const newItemId = getNextId();

  return (
    <div>
      <p>New item ID: {newItemId}</p>
      {/* Render content based on the new item ID */}
    </div>
  );
};

export default IdName;
