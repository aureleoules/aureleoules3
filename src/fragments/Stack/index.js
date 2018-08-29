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
						<a className="technology" href="#javascript">
							<a className="icon-js">JavaScript</a>
							<p>JavaScript</p>
						</a>
						<a className="technology" href="#javascript">
							<a className="icon-react">React.js</a>
							<p>React.js</p>
						</a>
						<a className="technology" href="#javascript">
							<a className="icon-nodejs">Node.js</a>
							<p>Node.js</p>
						</a>
						<a className="technology">
							<a className="icon-sass">Sass</a>
							<p>Sass</p>
						</a>
						<a className="technology" >
							<a className="icon-webpack">Webpack</a>
							<p>Webpack</p>
						</a>
						<a className="technology" href="#go">
							<a className="icon-golang">Golang</a>
							<p>Go</p>
						</a>
						<a className="technology">
							<a className="icon-mongodb">MongoDB</a>
							<p>MongoDB</p>
						</a>
						<a className="technology">
							<a className="icon-mysql">MySQL</a>
							<p>MySQL</p>
						</a>
					</div>
				</div>
			</div>;
	}
}

export default Stack;
