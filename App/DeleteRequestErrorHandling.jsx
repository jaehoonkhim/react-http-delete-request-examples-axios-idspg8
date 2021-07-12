import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteRequestErrorHandling() {
    const [status, setStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        // DELETE request using axios with error handling
        axios.delete('https://reqres.in/invalid-url')
            .then(response => setStatus('Delete successful'))
            .catch(error => {
                setErrorMessage(error.message);
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">DELETE Request with Error Handling</h5>
            <div className="card-body">
                Error: {errorMessage}
            </div>
        </div>
    );
}

export { DeleteRequestErrorHandling };