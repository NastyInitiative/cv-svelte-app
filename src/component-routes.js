import About from './components/pages/About.svelte';
import Skills from './components/pages/Skills.svelte';
import Experiences from './components/pages/Experiences.svelte';

const routes = [
    {name: 'About', path: '/', bg_class: "nasty-bg",component: About},
    {name: 'Skills', path: 'skills',bg_class: "skills-bg", component: Skills},
    {name: 'Experiences', path: 'experiences', bg_class: "nasty-bg", component: Experiences},
];

export default routes;