<script>
	import {Router, Route, Link, navigate} from 'svelte-routing';
	import routes from './component-routes';
	import HeroMain from './components/hero/HeroMain.svelte';
	import PageRoutes from  './components/PageRoutes.svelte';
	import BurgerMenu from './components/hero/BurgerMenu.svelte'
	import HeroLinks from './components/hero/HeroLinks.svelte';
	import { onMount } from 'svelte';
	export let url = "";
	let isBurgerMenuVisible = false;
	onMount(() => navigate("/about", { replace: true }));
 </script>

<Router url={url}>

	<!-- START Hero section -->
	<section class="hero is-primary is-medium ">
		<div class="hero-head">
			<BurgerMenu {routes} {isBurgerMenuVisible}></BurgerMenu>
		</div>
		<div class="hero-body ">
			<div class="container center-items">
				<div class="columns">
					<div class="column is-12 is-gapless">
						<HeroMain></HeroMain>
					</div>
				</div>
			</div>
		</div>
		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
			<HeroLinks {routes}></HeroLinks>
		</div>
	</section>
	<!-- END Hero section -->

	<!-- START Main section -->
	<section class="section">
		<div class="container">
			<PageRoutes {routes}></PageRoutes>
	</section>
	<!-- END Main section -->

</Router>

<footer class="footer">
	<div class="content has-text-centered">
		<p>
			Made with lots of <span class="red-text">love</span> and fried brain cells by NastyInitiative
		</p>
		The awesome tech I used: 
		<a href="https://bulma.io" target="_blank">
			<img src="https://bulma.io/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">
		</a>
		<a href="https://svelte.dev/" target="_blank">
			<img src="/logos/svelte-horizontal.svg" alt="Made with Svelte" width="128" height="24">
		</a>
	</div>
</footer>