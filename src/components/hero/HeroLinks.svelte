<script>
	import { link } from 'svelte-routing';
	import { quadInOut, quintIn} from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import * as animateScroll from 'svelte-scrollto';
	import { onMount } from 'svelte';
	export let routes;
	let currentRoute;
	onMount(() => {
		currentRoute = window.location.pathname
	})

	function handleClick(elem, activeLink) {
		coolScrool(elem);
		currentRoute = activeLink;
	}
	function coolScrool(elem) {
		animateScroll.scrollTo({element: elem, duration: 1400, easing:quadInOut })
	}
</script>

<nav class="tabs is-boxed is-fullwidth is-hidden-mobile no-overflow" transition:fly="{{y:200, duration: 1000,delay:1000, easing:quintIn}}">
	<ul>
		{#each routes as singleRoute}
			<li class="animate-border pages">
				<a class="animate-text" class:active-link={currentRoute === singleRoute.path}  
					href="{singleRoute.path}" use:link 
					on:click={() => handleClick('.pages', singleRoute.path)}>{singleRoute.name}</a>
			</li>
		{/each}
	</ul>
</nav>