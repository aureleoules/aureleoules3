import React from 'preact';

import FeaturedProject from 'components/FeaturedProject';

import './styles.scss';

import strings from 'strings';
import {getLanguage} from 'utils';

import projects from './projects.json';

class Featured extends React.Component {
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