<script>
    import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
    
    import ProgressCircle from './ProgressCircle.svelte'
    export let progress;
</script>

<div class="has-text-black-bis columns is-flex is-justify-content-center is-flex-wrap-wrap is-justify-content-space-around" >
    {#each progress as singleProgress }
        <div style="padding: 20px;" class="is-6 is-12-mobile is-align-content-center"
        in:fly={{y: 100, duration: 800 , delay: singleProgress.level * 10, easing:quintOut}}>
            <div class="has-text-centered has-text-white-bis pb-3"><p>{singleProgress.item}</p> </div>
            <ProgressCircle level={singleProgress.level} levelColor={singleProgress.color}> </ProgressCircle>
        </div>
    {/each}
</div>