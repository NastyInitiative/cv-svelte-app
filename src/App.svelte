<script>
	import {Router, Route, Link, navigate} from 'svelte-routing';
	import routes from './component-routes';
	import HeroMain from './components/hero/HeroMain.svelte';
	import PageRoutes from  './components/PageRoutes.svelte';
	import BurgerMenu from './components/hero/BurgerMenu.svelte'
	import HeroLinks from './components/hero/HeroLinks.svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let url = "";
	let isBurgerMenuVisible = false;
	onMount(() => navigate("/about", { replace: true }));
	// export let hero_size ="is-large";
 </script>

<Router url={url}>

	<!-- START Hero section -->
	<section class="hero nasty-bg is-medium" transition:slide="{{duration: 8000, delay:6000, easing:quintOut}}">
		<div class="hero-head">
			<BurgerMenu {routes} {isBurgerMenuVisible}></BurgerMenu>
		</div>
		<div class="hero-body" transition:fly="{{y:200, duration: 1000,dealy:1000, easing:quintOut}}">
			<div class="container center-items">
				<div class="columns">
					<div class="column is-12 is-gapless" t>
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
		</div>
	</section>
	<!-- END Main section -->

</Router>

<footer class="footer">
	<div class="content has-text-centered">
		<p>
			Made with lots of <span class="red-text">love</span> and fried brain cells by NastyInitiative
		</p>
		The awesome tech I used: 
		<div>
			<a href="https://bulma.io" target="_blank">
				<img src="/logos/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">
			</a>
			<a href="https://svelte.dev/" target="_blank" class="mt-5">
				<img src="/logos/svelte-horizontal.svg" alt="Made with Svelte" width="128" height="24">
			</a>
		</div>
	</div>
</footer>