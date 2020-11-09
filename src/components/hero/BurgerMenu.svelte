<script>
	import { link } from 'svelte-routing';
    import { slide } from 'svelte/transition';
    export let isBurgerMenuVisible;
    export let routes;
</script>

<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <span class="navbar-burger burger {isBurgerMenuVisible ? 'is-active' : ''}" 
                        on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible} >
                <span style="background-color: white"></span>
                <span style="background-color: white"></span>
                <span style="background-color: white"></span>
            </span>
        </div>
        <div  id="navbarMenuHeroA" class="navbar-menu burger-bg { isBurgerMenuVisible ? 'is-active' : ''}">
            <div class="navbar-end">
                {#each routes as singleRoute }
                    <span class="">
                        <a href="{singleRoute.path}" use:link  
                                class="navbar-item is-active burger-links  burger-bg is-size-5" 
                                on:click={() => isBurgerMenuVisible = !isBurgerMenuVisible}
                                >
                            {singleRoute.name}
                        </a>
                    </span>
                {/each}
            </div>
        </div>
    </div>
</nav>