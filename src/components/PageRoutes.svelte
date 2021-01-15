<script>
	import { Route } from 'svelte-routing';
    export  let routes;
</script>

{#each routes as singleRoute}
    <Route path={singleRoute.path} >
        <svelte:component this={singleRoute.component} ></svelte:component>
        <!-- <div>
        </div> -->
    </Route>
{/each}	