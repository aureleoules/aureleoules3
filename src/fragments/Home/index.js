import React from 'preact';

import './styles.scss';

class Home extends React.Component {
    
    render() {
        return <div className="home">
				<div>
					<div className="infos">
						<h1 className="tracking-in-expand">aureleoules</h1>
                        <h3 className="tracking-in-expand">FullStack Developer</h3>
					</div>
                    <div className="top">
                        <div className="logo scale-in-center"/>
                        <div className="socials">
                            <a rel="noopener noreferrer" href="https://github.com/aureleoules" target="_blank" className="icon-github scale-in-center">
                                    Github
                                </a>
                            <a href="mailto:aurele@oules.com" className="icon-mail scale-in-center">Email</a>
                            <a rel="noopener noreferrer" href="https://twitter.com/aureleoules_" target="_blank" className="icon-twitter scale-in-center">Twitter</a>
                        </div>
                    </div>
				</div>
			</div>;
    }
}

export default Home;