<script>
	import { link } from 'svelte-routing';
    import { expoOut, quadInOut, quintIn, quintInOut, quintOut, sineIn } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import * as animateScroll from 'svelte-scrollto';
    export let routes;
    function coolScrool(elem) {
        animateScroll.scrollTo({element: elem, duration: 1400, easing:quadInOut })
    }
</script>

<nav class="tabs is-boxed is-fullwidth is-hidden-mobile no-overflow" transition:fly="{{y:200, duration: 1000,delay:1000, easing:quintIn}}">
    <ul>
        {#each routes as singleRoute}
            <li class="animate-border pages">
                <a class="animate-text" href="{singleRoute.path}" use:link on:click={() => coolScrool('.pages')}>{singleRoute.name}</a>
            </li>
        {/each}
    </ul>
</nav>