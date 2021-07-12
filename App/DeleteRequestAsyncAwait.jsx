import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteRequestAsyncAwait() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // DELETE request using axios with async/await
    async function deletePost() {
      await axios.delete('http://research.shrinklabs.com:8090/inner/groups/4');
      setStatus('Delete successful112');
    }

    deletePost();
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">DELETE Request with Async/Await</h5>
      <div className="card-body">Status: {status}</div>
    </div>
  );
}

export { DeleteRequestAsyncAwait };
