import { getLanguage } from 'utils';

const strings = {
    "fr": {
        "TECHNOLOGY_STACK": "Technologies",
        "FEATURED_PROJECTS": "Projets mis en avant",
        "GITHUB_PROJECTS": "Projets GitHub"
    },
    "en": {
        "TECHNOLOGY_STACK": "Technology Stack",
        "FEATURED_PROJECTS": "Featured Projects",
        "GITHUB_PROJECTS": "GitHub Projects"
    }
}

export default strings[getLanguage()];