<script>
    import BurgerMenu from "./hero/BurgerMenu.svelte";
    import HeroLinks from "./hero/HeroLinks.svelte";

    export let routes;
    export let isBurgerMenuVisible;
</script>

<div class="hero-head hero-main" id="hero-main">
    <div class="m-auto vw-70">
        <HeroLinks {routes}></HeroLinks>
    </div>
    <BurgerMenu {routes} {isBurgerMenuVisible}></BurgerMenu>
</div>