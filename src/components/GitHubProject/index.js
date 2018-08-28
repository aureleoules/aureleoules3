import React from 'preact';

import './styles.scss';

class GitHubProject extends React.Component {
    render() {
        return (
            <div className="project">
                <a href={this.props.repository.homepage || this.props.repository.html_url} target="_blank">
                    {this.props.repository.name}
                    <img alt={this.props.repository.language} src={this.props.icon} />
                </a>
                <p className="description">
                    {this.props.repository.description}
                </p>
                <div className="infos">
                    <div className="star">
                        <a href={this.props.repository.html_url + "/stargazers"} target="_blank" className="icon-star">
                            Star
                        </a>
                        <span>{this.props.repository.stargazers_count}</span>
                    </div>
                    <div className="fork">
                        <a href={this.props.repository.html_url + "/fork"} target="_blank" className="icon-fork">
                            Fork
                        </a>
                        <span>{this.props.repository.forks_count}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default GitHubProject;