<script>
	import { link } from 'svelte-routing';
    import { quintIn, quintInOut, quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import * as animateScroll from 'svelte-scrollto';
    export let routes;
    function coolScrool(elem) {
        animateScroll.scrollTo({element: elem, duration: 1000, easing:quintInOut })
    }


</script>

<nav class="tabs is-boxed is-fullwidth is-on-desktop" transition:fly="{{y:200, duration: 1000,delay:1000, easing:quintIn}}">
    <div class="container">
        <ul>
            {#each routes as singleRoute}
                <li class="animate-border">
                    <div class="center-items">
                        <a class="animate-text" href="{singleRoute.path}" use:link on:click={() => coolScrool('.pages')}>{singleRoute.name}</a>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</nav>