
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import figma from '../assets/svg/skills/figma.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import nodejs from '../assets/svg/skills/node-js-svgrepo-com.svg'
import react_router from '../assets/svg/skills/react-router-svgrepo-com.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'node js':
            return nodejs;

        case 'html':
            return html;
        case 'css':

            return css;
        case 'javascript':

            return javascript;
        case 'react':
            return react;
        case 'react router':
            return react_router;

        case 'bootstrap':
            return bootstrap;

        case 'mongodb':
            return mongoDB;

        case 'tailwind':
            return tailwind;

        case 'firebase':
            return firebase;

        case 'git':
            return git;
        case 'materialui':
            return materialui
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        default:
            break;
    }
}
