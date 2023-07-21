import React, { useState, useEffect } from 'react';

function Refresh() {
  const [refresh, setRefresh] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  function handleRefresh() {
    setSelectedRow(null); // Unselect the row
    setRefresh(true);
  }

  useEffect(() => {
    if (refresh) {
      // Perform necessary actions (e.g., fetch data, update state)

      // Reset the refresh state to false
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div>
      {/* Other component content */}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
}

export default Refresh;
