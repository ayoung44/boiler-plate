import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoUploadPage from './views/VideoUploadPage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/video" component={VideoUploadPage} />
            </Switch>       
        </div>
    )
}

export default App;