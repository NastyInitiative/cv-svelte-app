<script>
    import ReturnToTop from "../shared/ReturnToTop.svelte";
    import PageRoutes from "./PageRoutes.svelte";

    export let routes;
    export let verticalPosition;
</script>

<div class="hero-body p-0">
    <div class="container is-mobile">
        <section class="section">
            <div class="container is-widescreen">
                <PageRoutes {routes}></PageRoutes>
            </div>
            <ReturnToTop {verticalPosition} elemToScrollTo={"#hero-main"}></ReturnToTop>
        </section>
    </div>
</div>