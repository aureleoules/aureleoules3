import React from 'preact';

import strings from '../../strings';

import './styles.scss';

class Home extends React.Component {
    
    render() {
        return <div className="home">
				<div>
                    <div className="top">
                        <a className="logo">
                            <img alt="Logo" src={require("../../assets/logo.svg")} />
                        </a>
                        <div className="socials">
                            <a className="contact " href="mailto:hello@aureleoules.com">
                                Contact
                            </a>
                            <a rel="noopener noreferrer" href="https://github.com/aureleoules" target="_blank" >
                                    <img alt="GitHub" src={require("../../assets/icons/github.svg")}/>
                                </a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/aureleoules" target="_blank">
                                <img alt="Instagram" className="instagram" src={require("../../assets/icons/instagram.svg")} />
                            </a>
                        </div>
                    </div>
					<div className="infos">
						<h1 className="tracking-in-expand">aureleoules</h1>
                        <h3 className="tracking-in-expand">FullStack Developer</h3>
                        <a href="mailto:hello@aureleoules.com" className="project-contact tracking-in-expand">
                            {strings.IDEA_IN_MIND}
                        </a>
					
                    </div>
				</div>
			</div>;
    }
}

export default Home;