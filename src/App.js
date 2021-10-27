import './style/main.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfileManager from './components/profile/ProfileManager';
import ModalLayout from './components/layout/ModalLayout';

function App() {
    return <div className="app">
        <BrowserRouter>
            <ModalLayout/>
            <Switch>
                <Route path="/" exact component={ProfileManager}/>
            </Switch>
        </BrowserRouter>
    </div>;
}

export default App;
