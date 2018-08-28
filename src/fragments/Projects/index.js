import React from 'preact';

import './styles.scss';

import ScrollReveal from 'scrollreveal';

import GitHubProject from 'components/GitHubProject';

import strings from 'strings';

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
				    <h1>{strings.GITHUB_PROJECTS}</h1>
					{this.state.repositories.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    }).map((repo, i) => {
                        const icon = require("../../assets/icons/" + repo.language + ".svg");
                        return <GitHubProject icon={icon} repository={repo}/>;
					})}
				</div>
			</div>;
    }
}

export default Projects;