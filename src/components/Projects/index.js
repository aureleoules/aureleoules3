import React from 'preact';

import './styles.scss';

import ScrollReveal from 'scrollreveal';

class Projects extends React.Component {
    
    constructor() {
        super();
        this.state = {
            repositories: []
        }
    }

    componentDidMount() {
        this.pageIndex = 1;
        this.getRepositories(this.pageIndex);
    }

    doneFetching = () => {
        const sr = ScrollReveal({
            reset: true,
            scale: 0.75,
            opacity: 1,
            duration: 1000
        });
        sr.reveal('.project', {
            afterReveal: elt => {
                elt.style.cssText = ""; //remove code from scrollreveal
            }
        });
    }

    getRepositories(pageIndex) {
        fetch(`https://api.github.com/users/aureleoules/repos?page=${pageIndex}`).then(response => {
            response.json().then(repositories => {
                const stateRepos = this.state.repositories;

                repositories.forEach(repo => {
                    if(!repo.fork && !repo.archived) {
                        stateRepos.push(repo);
                    }
                });
                if(repositories.length === 30) {
                    this.getRepositories(++this.pageIndex);
                    return
                }
                
                this.setState({
                    repositories: stateRepos
                }, this.doneFetching);
            });
        }).catch(err => {
            if (err) throw err;
        });
    }

    render() {
        return <div className="projects">
				<div className="projects-container">
				    <h1>Projects</h1>
					{this.state.repositories.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    }).map((repo, i) => {
                        const icon = require("../../assets/icons/" + repo.language + ".svg");
                        return <div className="project">
								<a href={repo.homepage || repo.html_url} target="_blank">
									{repo.name}
									<img src={icon} />
								</a>
								<p className="description">
									{repo.description}
								</p>
								<div className="infos">
                                    <div className="star">
                                        <a href={repo.html_url + "/stargazers"} target="_blank" className="icon-star">
                                            Star
                                        </a>
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="fork">
                                        <a href={repo.html_url + "/fork"} target="_blank" className="icon-fork">
                                            Fork
                                        </a>
                                        <span>{repo.forks_count}</span>
                                    </div>
								</div>
							</div>;
					})}
				</div>
			</div>;
    }
}

export default Projects;