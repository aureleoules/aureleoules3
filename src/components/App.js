import React from 'preact';

import Home from 'fragments/Home';
import Stack from 'fragments/Stack';
import Featured from 'fragments/Featured';
import Projects from 'fragments/Projects';

class App extends React.Component {
    render() {
        return <div>
			<Home />
			<Stack />
			<Featured />
			<Projects />
		</div>;
    }
}

export default App;