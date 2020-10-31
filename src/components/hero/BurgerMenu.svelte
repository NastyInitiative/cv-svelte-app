<script>
	import {Router, Route, Link, navigate} from 'svelte-routing';
    export let isBurgerMenuVisible;
    export let routes;
</script>

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