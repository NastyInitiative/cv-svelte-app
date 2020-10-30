<script>
	import {Router, Route, Link} from 'svelte-routing';
	import routes from './component-routes';
	import { slide  } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Home from './components/Home.svelte'
	let isBurgerMenuVisible = false;
	export let url = "";
 </script>

<Router url={url}>
	<section class="hero is-primary is-medium ">
		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<span class="navbar-burger burger {isBurgerMenuVisible ? 'is-active' : ''}" on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible} data-target="navbarMenuHeroA">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div  id="navbarMenuHeroA" class="navbar-menu { isBurgerMenuVisible ? 'is-active' : ''}" transition:slide="{{x:200, duration: 500}}">
						<div class="navbar-end">
							{#each routes as singleRoute }
								<span>
									<!-- svelte-ignore a11y-missing-attribute -->
									<a class="navbar-item is-active animate-text is-size-5" on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible}>
										<Link to={singleRoute.path}>{singleRoute.name}</Link>
									</a>
								</span>
							{/each}
						</div>
					</div>
				</div>
			</nav>
		</div>
		<div class="hero-body ">
			<div class="container center-items">
				<div class="columns">
					<div class="column is-12 is-gapless">
						<Home></Home>
					</div>
				</div>
			</div>
		</div>
		<!-- Hero footer: will stick at the bottom -->
		<div class="hero-foot">
			<nav class="tabs is-boxed is-fullwidth is-on-desktop">
				<div class="container">
					<ul>
						{#each routes as singleRoute}
							<li class="animate-border animate-text">
								<div class="center-items">
									<Link to={singleRoute.path}>{singleRoute.name}</Link>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</nav>
		</div>
	</section>
	<section class="section">
		<div class="container">
			{#each routes as singleRoute}
					<Route path={singleRoute.path} >
						<div  class="tile is-ancestor" transition:slide="{{duration: 1200, easing:quintOut}}">
							<svelte:component this={singleRoute.component} ></svelte:component>
						</div>
					</Route>
			{/each}	
		</div>
	</section>
</Router>