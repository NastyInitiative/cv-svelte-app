<script>
    import { currentRoute } from '../router';

    export let page = {
        path: '/intro',
        name: 'Intro'
    };

    function redirectTo(event) {

        // Change current path
        currentRoute.set(event.target.pathname);

        // Push current path in web browser history API for better navigation
        window.history.pushState({path: page.path}, '', window.location.origin + page.path);
    }



</script>
<div class="mt-5">
    <a href="{page.path}" on:click|preventDefault={redirectTo}>
        <p class="animate-border animate-text is-size-3">{page.name}</p>
    </a>
</div>