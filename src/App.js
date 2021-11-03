import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProfileManager from './components/profile/ProfileManager';
import ModalLayout from './components/layout/ModalLayout';

import { setLocalStorage, getFromLocalStorage } from './utils/localStorage';


const rewardsList = [
    {
        'image': '/images/person-1.webp',
        'rewardfulName': 'Jane Doe',
        'rewardingName': 'Chris Redfield',
        'comment': 'Thanks for help',
        'rewardTime': 'Jul 17, 2021'
    },
    {
        'image': '/images/person-2.webp',
        'rewardfulName': 'David Greene',
        'rewardingName': 'John Chen',
        'comment': 'Many thanks to my supervisor Mrs. Jane Doe for her guidance during my research.',
        'rewardTime': 'Jun 4, 2021'
    },
    {
        'image': '/images/person-3.webp',
        'rewardfulName': 'Alex Brown',
        'rewardingName': 'Rajesh Kumar',
        'comment': 'From the bottom of my heart I would like to say big thank you to Mrs. Jane Doe for the guidance throughout the gel extraction.',
        'rewardTime': 'May 21, 2021'
    },
    {
        'image': '/images/person-4.webp',
        'rewardfulName': 'Jane Doe',
        'rewardingName': 'Milly Brown',
        'comment': 'I would like to thank Mrs. Jane Doe for guiding me to his important publications and for the stimulating questions on artificial intelligence and automation.',
        'rewardTime': 'Feb 21, 2021'
    }
];

const App = () => {
    if (!getFromLocalStorage('rewards')) {
        setLocalStorage('rewards', rewardsList);
    }
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
