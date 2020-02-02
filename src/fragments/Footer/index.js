import React from 'preact';

import './styles.scss';

import strings from 'strings';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content">
                    <a>
                        <img className="animate" alt="Logo" src={require("../../assets/logo.svg")} />
                    </a>
                    <h3>Aurèle Oulès - {new Date().getFullYear()}</h3>
                    <p>{strings.MADE_WITH} <a className="icon-heart">♥</a> {strings.BY} Aurèle Oulès</p>
                </div>
            </footer>
        );
    }
}

export default Footer;