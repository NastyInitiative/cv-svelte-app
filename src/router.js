import About from './components/About.svelte';
import Intro from './components/Intro.svelte';
import Skills from './components/Skills.svelte';
import Experiences from './components/Experiences.svelte';

const routes = [
    {name: 'Intro', path: '/', component: Intro, id:"intro"},
    {name: 'About', path: 'about', component: About, id:"about"},
    {name: 'Skills', path: 'skills', component: Skills, id:"skills"},
    {name: 'Experiences', path: 'experiences', component: Experiences, id:"experiences"},
];

export default routes;