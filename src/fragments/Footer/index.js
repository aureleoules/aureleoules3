import React from 'preact';

import './styles.scss';

import strings from 'strings';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/aureleoules/aureleoules3">
                        <img alt="Logo" src={require("../../assets/logo.svg")} />
                    </a>
                    <h3>Aurèle Oulès - {new Date().getFullYear()}</h3>
                    <p>{strings.MADE_WITH} <a className="icon-heart">♥</a> {strings.BY} Aurèle Oulès</p>
                    <div className="donate">
                        <code>BTC 1LJMmY6RxDJqGEGgVXL7CBaykDFtFHcyNG</code>
                        <code>XLM GBHZ23YJATFRYHLC3Q6ORM5R525Y5JOKD7KB2KTZVRJT2CZ5RM7N4I2E</code>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;