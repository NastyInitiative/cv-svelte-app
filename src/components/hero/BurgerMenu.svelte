<script>
	import { link } from 'svelte-routing';
    export let isBurgerMenuVisible;
    export let routes;
    import * as animateScroll from 'svelte-scrollto';
    import { quadInOut } from 'svelte/easing';
import { fly } from 'svelte/transition';
    function coolScrool(elem) {
        isBurgerMenuVisible = !isBurgerMenuVisible
        animateScroll.scrollTo({element: elem, duration: 1400, easing:quadInOut })
    }
</script>

<nav class="navbar">
    <div class="navbar-brand is-hidden-desktop is-hidden-tablet">
        <span class="navbar-burger burger {isBurgerMenuVisible ? 'is-active' : ''}" 
                    on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible} >
            <span style="background-color: white"></span>
            <span style="background-color: white"></span>
            <span style="background-color: white"></span>
        </span>
    </div>
    <div  id="navbarMenuHeroA" class="navbar-menu burger-bg is-hidden-desktop is-hidden-tablet { isBurgerMenuVisible ? 'is-active' : ''}">
        <div class="navbar-end">
            {#each routes as singleRoute }
                <span class="">
                    <a href="{singleRoute.path}" use:link  
                            class="navbar-item is-active burger-links  burger-bg is-size-5" 
                            on:click={() => coolScrool('.pages')}
                            >
                        {singleRoute.name}
                    </a>
                </span>
            {/each}
        </div>
    </div>
    <!-- <div class="tabs is-boxed is-fullwidth is-hidden-mobile " transition:fly="{{y:200, duration: 1000,delay:1000, easing:quintIn}}">
        <ul>
            {#each routes as singleRoute}
                <li class="animate-border pages">
                    <div class="center-items">
                        <a class="animate-text" href="{singleRoute.path}" use:link on:click={() => coolScrool('.pages')}>{singleRoute.name}</a>
                    </div>
                </li>
            {/each}
        </ul>
    </div> -->
</nav>