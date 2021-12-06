import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ProfileManager from './components/pages/ProfileManager';
import ModalLayout from './components/pages/ModalLayout';


const App = () => {
    return <div className="app">
        <BrowserRouter>
            <ModalLayout/>
            <Switch>
                <Route path="/" exact component={ProfileManager}/>
            </Switch>
        </BrowserRouter>
    </div>;
};

export default App;
