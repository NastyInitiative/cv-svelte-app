<script>
    import ReturnToTop from "../shared/ReturnToTop.svelte";
    import FloatingNav from "../shared/FloatingNav.svelte";
    import PageRoutes from "./PageRoutes.svelte";
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Skills from './pages/Skills.svelte';
    import Education from './pages/Education.svelte'
    import Experiences from './pages/Experiences.svelte';
    import Contacts from './pages/Contacts.svelte';

    export let routes;
    export let verticalPosition;
</script>

<div class="hero-body p-0">
    <div class="container is-mobile">
        <section class="section">
            <div class="container is-widescreen">
                <!-- <PageRoutes {routes}></PageRoutes> -->
                <div class="m-auto ">
                    <Home/>

                </div>
                <About/>
                <Skills/>
                <Education/>
                <Experiences/>
                <Contacts/>
            </div>
            <FloatingNav></FloatingNav>
            <ReturnToTop {verticalPosition} elemToScrollTo={"#hero-main"}></ReturnToTop>
        </section>
    </div>
</div>