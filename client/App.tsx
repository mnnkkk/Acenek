import React from 'react';
import Counter from "./modules/Counter/Counter";

import UserInfo from './modules/UserInfo';
import EntryList from "./modules/EntryList";

import './App.less';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <UserInfo />
                <EntryList />
                <Counter />
            </header>
        </div>
    );
}

export default App;
