<script>
	import {Route} from 'svelte-routing';
	import { slide  } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import About from './pages/About.svelte';
    export  let routes;

</script>

{#each routes as singleRoute}
        <Route path={singleRoute.path} >
            <div  transition:slide="{{duration: 1000, easing:quintOut}}">
                <svelte:component this={singleRoute.component} ></svelte:component>
            </div>
        </Route>
			<Route component="{About}"></Route>

{/each}	