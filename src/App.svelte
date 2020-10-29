<script>
	import {Router, Route, Link} from 'svelte-routing';
	import routes from './router';
	import {  fade, fly, slide  } from 'svelte/transition';
	import { quintInOut, quintOut } from 'svelte/easing';

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
	}

	export let url = "";
 </script>

<Router url={url}>
	<section class="hero is-primary is-fullheight" style="position:relative; overflow: hidden;">
		<div class="hero-body">
			<div class="columns mr-6">
				<div class="column is-4">
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
								<div transition:slide="{{x: getRandomInt(-200, 500), y: getRandomInt(-200, 500),duration: 900, easing:quintOut}}">
									<svelte:component this={singleRoute.component} ></svelte:component>
								</div>
							</Route>
					{/each}	
				</div>
			</div>
		</div>
	</section>
</Router>