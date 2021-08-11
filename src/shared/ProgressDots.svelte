<script>
    import { cubicOut, quintOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
    export let level;
    let tweenedLevel = tweened(0, {
        duration: 1500,
        easing: quintOut,
        delay: level * 10
    });
    $: tweenedLevel.set(level);

    let numberOfDots = [];
    for(let i=0; i<level; i++){
        numberOfDots.push(level)
    }
</script>

<span class="is-clearfix is-clipped">
    <p>
        <slot></slot>
        <!-- <span class="is-pulled-right">{level}%</span> -->
    </p>
</span>
<div class="is-flex is-justify-content-center is-flex-direction-row m-0 p-2">
    {#each numberOfDots as level }
        <div class="progress-dot mb-5 mt-1 m-1"></div>
    {/each}
</div>
