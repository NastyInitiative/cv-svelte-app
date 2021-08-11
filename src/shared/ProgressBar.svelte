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
</script>

<span class="is-clearfix is-clipped">
    <p>
        <slot></slot>
        <span class="is-pulled-right">{level}%</span>
    </p>
</span>
<div class="progress-bar mb-5 mt-1" style="width:{$tweenedLevel}%"></div>
