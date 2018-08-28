import { getLanguage } from 'utils';

const strings = {
    "fr": {
        "TECHNOLOGY_STACK": "Technologies",
        "FEATURED_PROJECTS": "Projets mis en avant",
        "GITHUB_PROJECTS": "Projets GitHub",
        "MADE_WITH": "Réalisé avec ",
        "BY": "par"
    },
    "en": {
        "TECHNOLOGY_STACK": "Technology Stack",
        "FEATURED_PROJECTS": "Featured Projects",
        "GITHUB_PROJECTS": "GitHub Projects",
        "MADE_WITH": "Made with ",
        "BY": "by"
    }
}

export default strings[getLanguage()];