import Home from './components/pages/Home.svelte';
import Skills from './components/pages/Skills.svelte';
import Experiences from './components/pages/Experiences.svelte';
import About from './components/pages/About.svelte';

const routes = [
    {name: 'Home', path: '/',component: Home},
    {name: 'About', path: '/about',component: About},
    {name: 'Skills', path: 'skills', component: Skills},
    {name: 'Experiences', path: 'experiences', component: Experiences},
];

export default routes;