import React from 'preact';

import ScrollReveal from 'scrollreveal';

import './styles.scss';

import strings from 'strings';

class Stack extends React.Component {
    
    componentDidMount() {
        const sr = ScrollReveal({
			reset: true,
			scale: 0.5,
			opacity: 1,
			duration: 1000
        });
        sr.reveal('.technology', {afterReveal: elt => {
            elt.style.cssText = ""; //remove code from scrollreveal
        }});
    }

	render() {
		return <div className="stack">
				<div>
					<h1>{strings.TECHNOLOGY_STACK}</h1>
					<div className="technologies">
						<a className="technology" href="#go">
							<a className="icon-golang">Golang</a>
							<p>Go</p>
						</a>
						<a className="technology" href="#typescript">
							<a className="icon-ts">TypeScript</a>
							<p>TypeScript</p>
						</a>
						<a className="technology">
							<a className="icon-react">React.js</a>
							<p>React.js</p>
						</a>
						<a className="technology">
							<a className="icon-docker">Docker</a>
							<p>Docker</p>
						</a>
						<a className="technology">
							<a className="icon-sass">Sass</a>
							<p>Sass</p>
						</a>
						<a className="technology" >
							<a className="icon-database">SQL</a>
							<p>SQL</p>
						</a>
						<a className="technology">
							<a className="icon-git">Git</a>
							<p>Git</p>
						</a>
						<a className="technology">
							<a className="icon-bitcoin">Bitcoin</a>
							<p>Bitcoin</p>
						</a>
					</div>
				</div>
			</div>;
	}
}

export default Stack;
