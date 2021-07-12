import React from 'react';

import { DeleteRequest, DeleteRequestHooks, DeleteRequestAsyncAwait, DeleteRequestErrorHandling, DeleteRequestSetHeaders } from './';

class App extends React.Component {
    render() {
        return (
            <div>
                <h3 className="p-3 text-center">React HTTP DELETE Requests with Axios</h3>
                <DeleteRequestSetHeaders />
            </div>
        );
    }
}

export { App };