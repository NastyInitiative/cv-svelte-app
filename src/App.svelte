<script>
	import {Router, Route, Link, navigate} from 'svelte-routing';
	import routes from './component-routes';
	import Hero from './components/hero/Hero.svelte';
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
						<Hero></Hero>
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