import App from './App.svelte';
import './bulma-entrypoint.scss';
const app = new App({
	target: document.body,
	hydrate: true
});

export default app;