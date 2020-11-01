<script>
	import {Router, Route, Link, navigate, link} from 'svelte-routing';
    import { slide } from 'svelte/transition';
    export let isBurgerMenuVisible;
    export let routes;
</script>

<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <span class="navbar-burger burger {isBurgerMenuVisible ? 'is-active' : ''}" 
                        on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible} >
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
        <div  id="navbarMenuHeroA" class="navbar-menu { isBurgerMenuVisible ? 'is-active' : ''}" 
                    transition:slide="{{x:200, duration: 500}}">
            <div class="navbar-end">
                {#each routes as singleRoute }
                    <span>
                        <a href="{singleRoute.path}" use:link  
                                class="navbar-item is-active animate-text is-size-5" 
                                on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible}>
                            {singleRoute.name}
                        </a>
                    </span>
                {/each}
            </div>
        </div>
    </div>
</nav>