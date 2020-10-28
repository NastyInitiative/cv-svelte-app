<script>
	import {Router, Route, Link} from 'svelte-routing';
	import About from './components/About.svelte';
	import Intro from './components/Intro.svelte';
	import Skills from './components/Skills.svelte';
	import Experiences from './components/Experiences.svelte';

	const routes = [
		{name: 'Intro', path: '/', component: Intro},
		{name: 'About', path: 'about', component: About},
		{name: 'Skills', path: 'skills', component: Skills},
		{name: 'Experiences', path: 'experiences', component: Experiences},
	];

	export let url = "";
 </script>

<Router>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="columns mr-6">
				<div class="column is-4">
					{#each routes as singleRoute}
						<div class="mt-5">
							<p class="animate-border animate-text is-size-3">
								<Link style="color: white" to={singleRoute.path}>{singleRoute.name}</Link>
							</p>
						</div>
						
					{/each}
				</div>
			</div>
			<div class="columns">
				<div class="column is-offset-3 is-12">
					<div class="container">
						{#each routes as singleRoute}
							<Route path={singleRoute.path} component={singleRoute.component}></Route>
						{/each}	
					</div>
				</div>
			</div>
		</div>
	</section>
</Router>