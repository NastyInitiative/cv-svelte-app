<script>
	import {Route} from 'svelte-routing';
	import { slide  } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    export  let routes;
</script>

{#each routes as singleRoute}
        <Route path={singleRoute.path} >
            <div  class="tile is-ancestor" transition:slide="{{duration: 1200, easing:quintOut}}">
                <svelte:component this={singleRoute.component} ></svelte:component>
            </div>
        </Route>
{/each}	