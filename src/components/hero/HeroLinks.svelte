<script>
	import {Link, link } from 'svelte-routing';
import { quintIn } from 'svelte/easing';
import { fly } from 'svelte/transition';
    export let routes;

</script>

<nav class="tabs is-boxed is-fullwidth is-on-desktop" transition:fly="{{y:200, duration: 1000,dealy:1000, easing:quintIn}}">
    <div class="container">
        <ul>
            {#each routes as singleRoute}
                <li class="animate-border animate-text">
                    <div class="center-items">
                        <a href="{singleRoute.path}" use:link >{singleRoute.name}</a>
                        <!-- <Link to={singleRoute.path}></Link> -->
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</nav>