import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteRequestSetHeaders() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        // DELETE request using axios with set headers
        const headers = { 
            //'Authorization': 'Bearer my-token',
            //'My-Custom-Header': 'foobar'
            'Content-Type': 'application/json'
        };
        axios.delete('http://research.shrinklabs.com/inner/groups/5', { headers }, { withCredentials: true })
            .then(() => setStatus('Delete successful1121'));
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">DELETE Request with Set Headers</h5>
            <div className="card-body">
                Status: {status}
            </div>
        </div>
    );
}

export { DeleteRequestSetHeaders };