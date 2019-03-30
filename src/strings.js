import { getLanguage } from 'utils';

const strings = {
    "fr": {
        "TECHNOLOGY_STACK": "Technologies",
        "FEATURED_PROJECTS": "Projets mis en avant",
        "GITHUB_PROJECTS": "Projets GitHub",
        "MADE_WITH": "Réalisé avec ",
        "BY": "par",
        "IDEA_IN_MIND": "Une idée en tête ?",
        "DONATE": "Faire un don"
    },
    "en": {
        "TECHNOLOGY_STACK": "Technology Stack",
        "FEATURED_PROJECTS": "Featured Projects",
        "GITHUB_PROJECTS": "GitHub Projects",
        "MADE_WITH": "Made with ",
        "BY": "by",
        "IDEA_IN_MIND": "An idea in mind?",
        "DONATE": "Donate"
    }
}

export default strings[getLanguage()];