import React from 'preact';

import FeaturedProject from 'components/FeaturedProject';

import './styles.scss';

import strings from 'strings';

class Featured extends React.Component {
	render() {
		return <div className="featured">
				<h1>{strings.FEATURED_PROJECTS}</h1>
				<FeaturedProject 
					src={require('../../assets/screenshots/constanceoules.com.png')}
					url={"https://www.constanceoules.com"}
					title={"constanceoules.com"}
					description={"Agence d'architecture intérieure basée à Paris. Rénovation, décoration, et design de mobilier."}
					technologies={["JavaScript", "react", "sass", "webpack"]}
				/>
				<FeaturedProject
					src={require('../../assets/screenshots/aurele.oules.com.png')}
					url={"https://aurele.oules.com"}
					title={"aurele.oules.com"}
					description={"This is my personal website."}
					technologies={["JavaScript", "angular", "CSS", "webpack"]}
				/>
				<FeaturedProject
					src={require('../../assets/screenshots/sol6.png')}
					url={"https://sol6.herokuapp.com/"}
					title={"Sol6"}
					description={"Sol6 est une association à but non lucratif qui permet aux étudiants de l’Université Pierre et Marie Curie (Paris VI), en majeur partie, de participer à des actions solidaires à l’étranger et de les guider lors de la préparation de leurs projets humanitaires."}
					technologies={["JavaScript", "react", "sass", "webpack", "nodejs", "express", "mongodb"]}
				/>
			</div>;
	}
}

export default Featured;