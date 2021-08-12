<script>
    import * as animateScroll from 'svelte-scrollto';
    import { quadInOut, quintOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    
    export let verticalPosition;
    export let elemToScrollTo;

    function coolScroll(elem) {
        animateScroll.scrollTo({element: elem, duration: 1400, easing: quadInOut })
    }
</script>

{#if verticalPosition > 200}
    <a href="#hero-main" class="button to-top-btn center-items" 
        on:click={() => coolScroll(elemToScrollTo)} 
        transition:slide="{{duration: 500, easing:quintOut}}">
        <img src="/icons/expand_less-white-18dp.svg" alt="Return to top"/>
    </a>
{/if}