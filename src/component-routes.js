import About from './components/pages/About.svelte';
import Skills from './components/pages/Skills.svelte';
import Experiences from './components/pages/Experiences.svelte';

const routes = [
    {name: 'About', path: '/', selector: ".about",component: About},
    {name: 'Skills', path: 'skills', selector: ".skills", component: Skills},
    {name: 'Experiences', path: 'experiences', selector: ".exp", component: Experiences},
];

export default routes;