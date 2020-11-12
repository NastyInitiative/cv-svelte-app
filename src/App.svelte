<script>
	import { Router, navigate } from 'svelte-routing';
	import routes from './component-routes';
	import HeroMain from './components/hero/HeroMain.svelte';
	import PageRoutes from  './components/PageRoutes.svelte';
	import BurgerMenu from './components/hero/BurgerMenu.svelte'
	import HeroLinks from './components/hero/HeroLinks.svelte';
	import { fly, slide, fade } from 'svelte/transition';
    import * as animateScroll from 'svelte-scrollto';
	import { quadInOut, quintOut } from 'svelte/easing';
	function coolScrool(elem) {
        animateScroll.scrollTo({element: elem, duration: 1400, easing: quadInOut })
    }
	export let url = "";
	let isBurgerMenuVisible = false;
	let y;
</script>
<svelte:window bind:scrollY={y}/>
<Router url={url}>
	<!-- START Hero section -->
	<section class="hero nasty-bg is-fullheight">
		<div class="hero-head hero-main" id="hero-main">
			<BurgerMenu {routes} {isBurgerMenuVisible}></BurgerMenu>
		</div>
		<div class="hero-body" >
			<div class="container center-items is-mobile">
				<div class="columns">
					<div class="column p-0">
						<HeroMain></HeroMain>
					</div>
				</div>
			</div>
		</div>
		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot pages">
			<div class="container">
				<HeroLinks {routes}></HeroLinks>
			</div>
		</div>
	</section>
	<!-- END Hero section -->

	<!-- START Main section -->
	<section class="section ">
		<div class="container">
			<PageRoutes {routes}></PageRoutes>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		{#if y > 200}
			<a href="#hero-main" class="button to-top-btn center-items" on:click={() => coolScrool('#hero-main')} transition:slide="{{duration: 500, easing:quintOut}}">
				<img src="/icons/expand_less-white-18dp.svg" />
			</a>
		{/if}
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
			<a href="https://bulma.io" target="_blank" rel="noreferrer">
				<img src="/logos/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">
			</a>
			<a href="https://svelte.dev/" target="_blank" class="mt-5" rel="noreferrer">
				<img src="/logos/svelte-horizontal.svg" alt="Made with Svelte" width="128" height="24">
			</a>
		</div>
	</div>
</footer>