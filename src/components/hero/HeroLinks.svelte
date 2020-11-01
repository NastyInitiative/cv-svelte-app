<script>
	import {Link} from 'svelte-routing';
    export let routes;
</script>

<nav class="tabs is-boxed is-fullwidth is-on-desktop">
    <div class="container">
        <ul>
            {#each routes as singleRoute}
                <li class="animate-border animate-text">
                    <div class="center-items">
                        <Link to={singleRoute.path}>{singleRoute.name}</Link>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</nav>