<script>
	import {Router, Route, Link} from 'svelte-routing';
	import routes from './router';
	import {  fade, fly, slide  } from 'svelte/transition';
	import { quintInOut, quintOut } from 'svelte/easing';
	import getRandomInt, { toggleBurgerMenu } from './utils';
	import { onMount } from 'svelte';
	onMount(() => {
		toggleBurgerMenu();
	});
	export let url = "";
 </script>

<Router url={url}>
	<section class="hero is-primary is-fullheight" style="position:relative; overflow: hidden;">
		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<span class="navbar-burger burger" data-target="navbarMenuHeroA">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div id="navbarMenuHeroA" class="navbar-menu">
						<div class="navbar-end">
							{#each routes as singleRoute }
								<div class="navbar-item is-active animate-border animate-text">
									<Link  to={singleRoute.path}>{singleRoute.name}</Link>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</nav>
		</div>
		<div class="hero-body">
			<div class="columns mr-6">
				<div class="column is-4 lg-screen-menu">
					{#each routes as singleRoute}
						<div class="mt-5">
							<p class="animate-border animate-text is-size-3">
								<Link to={singleRoute.path}>{singleRoute.name}</Link>
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="columns" >
				<div class="column is-12 is-gapless">
					{#each routes as singleRoute (singleRoute.id)}
							<Route path={singleRoute.path} >
								<div transition:slide="{{duration: 900, easing:quintOut}}">
									<svelte:component this={singleRoute.component} ></svelte:component>
								</div>
							</Route>
					{/each}	
				</div>
			</div>
		</div>
	</section>
</Router>