<script>
    import * as animateScroll from 'svelte-scrollto';
    import { quadInOut, quintOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    
    export let verticalPosition;
    export let elemToScrollTo;

    function coolScroll(elem) {
        animateScroll.scrollTo({element: elem, easing: quadInOut })
    }
</script>

<div class="floating-nav-container">
    <div class="floating-nav-menu center-items">
        <a href="#home" class="floating-nav-btn" 
            on:click={() => coolScroll("#home")}>
            home
        </a>
        <a href="#about" class="floating-nav-btn" 
            on:click={() => coolScroll("#about")} >
            about
        </a>
        <a href="#skills" class="floating-nav-btn" 
            on:click={() => coolScroll("#skills")} >
            skills
        </a>
        <a href="#education" class="floating-nav-btn" 
            on:click={() => coolScroll("#education")} >
            education
        </a>
        <a href="#experiences" class="floating-nav-btn" 
            on:click={() => coolScroll("#experiences")} >
            experiences
        </a>
        <a href="#contacts" class="floating-nav-btn" 
            on:click={() => coolScroll("#contacts")} >contacts
        </a>
    </div>
</div>
<!-- {#if verticalPosition > 200}
{/if} -->