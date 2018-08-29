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
                        <a className="logo">
                            <img alt="Logo" src={require("../../assets/icons/logo.png")} />
                        </a>
                        <div className="socials">
                            <a rel="noopener noreferrer" href="https://github.com/aureleoules" target="_blank" >
                                    <img alt="GitHub" src={require("../../assets/icons/github.svg")}/>
                                </a>
                            <a href="mailto:aurele@oules.com">
                                <img alt="Email" src={require("../../assets/icons/mail.svg")} />
                            </a>
                            <a rel="noopener noreferrer" href="https://twitter.com/aureleoules_" target="_blank">
                                <img alt="Twitter" src={require("../../assets/icons/twitter.svg")} />
                            </a>
                        </div>
                    </div>
				</div>
			</div>;
    }
}

export default Home;