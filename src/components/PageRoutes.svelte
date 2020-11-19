<script>
	import { Route } from 'svelte-routing';
import { quintOut } from 'svelte/easing';
	import { slide  } from 'svelte/transition';
    export  let routes;
</script>

{#each routes as singleRoute}
    <Route path={singleRoute.path} >
        <div transition:slide="{{duration: 1000, easing: quintOut}}">
            <svelte:component this={singleRoute.component} ></svelte:component>
        </div>
    </Route>
{/each}	