import Skills from './components/Skills.svelte';
import Intro from './components/Intro.svelte';
import Experiences from './components/Experiences.svelte';
import About from './components/About.svelte';

import { writable } from 'svelte/store';

const navRoutes = [
    {'/': Intro},
    { '/intro': Intro},
    { '/about': About},
    { '/skills': Skills},
    { '/experiences': Experiences},
];

export default navRoutes;

export const currentRoute = writable('/intro');
