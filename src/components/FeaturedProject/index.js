import React from 'preact';

import './styles.scss';

class FeaturedProject extends React.Component {
    render() {
        return (
            <div className="featured-project">
                <div className="informations">
                    <a href={this.props.url} target="_blank">{this.props.title}</a>
                    <p>{this.props.description}</p>
                    <div className="technologies">
                        {this.props.technologies.map((tech, i) => {
                            return <img src={require("../../assets/icons/" + tech + ".svg")}/>
                        })}
                    </div>
                </div>
                <a href={this.props.url} target="_blank" className="img-container">
                    <img alt={this.props.title} src={this.props.src} />
                    <h2>OPEN</h2>
                </a>
            </div>
        );
    }
}

export default FeaturedProject;