import About from './components/About.svelte';
import Skills from './components/Skills.svelte';
import Experiences from './components/Experiences.svelte';

const routes = [
    {name: 'About', path: 'about', component: About},
    {name: 'Skills', path: 'skills', component: Skills},
    {name: 'Experiences', path: 'experiences', component: Experiences},
];

export default routes;