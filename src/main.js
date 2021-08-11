import App from './App.svelte';
import './scss/bulma-entrypoint.scss';
import './scss/utility.scss';
import './scss/bg_style.scss';
import './scss/btn_style.scss';
import './scss/link_style.scss';
import './scss/text_style.scss';
import './scss/progress_style.scss';
const app = new App({
	target: document.body,
	hydrate: true
});

export default app;