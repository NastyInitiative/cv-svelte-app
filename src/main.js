import App from './App.svelte';
import './style.scss';
const app = new App({
	target: document.body,
	hydrate: true
});

export default app;