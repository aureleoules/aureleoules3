import React from 'preact';

import './styles.scss';

import ScrollReveal from 'scrollreveal';

import GitHubProject from 'components/GitHubProject';

import strings from 'strings';

class Projects extends React.Component {
    
    constructor() {
        super();
        this.state = {
            repositories: [],
            languageFilter: window.location.hash.replace("#", "")
        }
    }

    componentDidMount() {
        this.pageIndex = 1;
        this.getRepositories(this.pageIndex);

        window.onhashchange = () => {
            this.setState({languageFilter: window.location.hash.replace("#", "")}, () => {
                document
                    .getElementById('projects')
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: "start", 
                        inline: "nearest"
                    });
            });
        }
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

    removeFilter = () => {
        this.setState({languageFilter: ""}, () => {
            window.history.pushState(null, null, '#');
        });
    }

    render() {
        return <div id="projects" className="projects">
                <div className="projects-container">
                    <h1 onClick={this.removeFilter}>
                        {strings.GITHUB_PROJECTS} 
                        {this.state.languageFilter && <img alt="language" src={require('../../assets/icons/' + this.state.languageFilter + ".svg")}/>}
                    </h1>
                    
					{this.state.repositories.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    })
                    .filter(repo => {
                        if(this.state.languageFilter) {
                            return repo.language.toLowerCase() === this.state.languageFilter
                        }
                        return true;
                    })
                    .map((repo, i) => {
                        if(repo.language) {
                            const icon = require("../../assets/icons/" + repo.language.toLowerCase() + ".svg");
                            return <GitHubProject icon={icon} repository={repo}/>;
                        }
					})}
				</div>
			</div>;
    }
}

export default Projects;