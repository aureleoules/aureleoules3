import React from 'preact';

import Home from './Home';
import Stack from './Stack';
import Projects from './Projects';


class App extends React.Component {
    render() {
        return (
            <div>
                <Home/>
                <Stack/>
                <Projects/>
            </div>
        );
    }
}

export default App;