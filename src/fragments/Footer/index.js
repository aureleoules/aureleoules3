import React from 'preact';

import './styles.scss';

import strings from 'strings';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content">
                    <a title={strings.DONATE} target="_blank" rel="noopener noreferrer" href="https://commerce.coinbase.com/checkout/dcb8ffec-8717-4c70-85bb-b0dd588ea4d0">
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