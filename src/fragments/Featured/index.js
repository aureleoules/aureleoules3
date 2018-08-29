import React from 'preact';

import FeaturedProject from 'components/FeaturedProject';

import './styles.scss';

import strings from 'strings';
import {getLanguage} from 'utils';

import projects from './projects.json';

import ScrollReveal from 'scrollreveal';

class Featured extends React.Component {
	
	componentDidMount() {
		const sr = ScrollReveal({
			reset: true,
			scale: 0.75,
			opacity: 1,
			duration: 1000
		});
		const options = { afterReveal: elt => {
			elt.style.cssText = ''; //remove code from scrollreveal
		} };
		sr.reveal('img', options);
		sr.reveal('.informations a', options);
		sr.reveal('.informations p', options);
		sr.reveal('.informations img', options);
	}

	render() {
		return <div className="featured">
				<h1>{strings.FEATURED_PROJECTS}</h1>
				{projects.map((project, i) => {
					return (
						<FeaturedProject
							title={project.title}
							description={project["description_" + getLanguage()]}
							url={project.url}
							technologies={project.technologies}
							src={require(`../../assets/screenshots/${project.screenshot_name}`)}
						/>
					)
				})}
			</div>;
	}
}

export default Featured;