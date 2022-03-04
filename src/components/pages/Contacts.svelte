<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>
<p class="is-size-2-desktop is-size-3-mobile is-size-3-tablet" in:fly={{y: 100, delay: 200, duration: 800, easing:quintOut}}>Contacts</p>
<div class="tile is-ancestor" id="contacts">
    <div class="tile is-4 is-parent" in:fly={{y: 100, delay: 400,duration: 800, easing:quintOut}}>
        <div class="tile is-child box glass-bg has-text-white-bis">
            <div>
                <img src="/icons/linkedin-icon-blue.svg" alt="" width="96" height="96">
            </div>
            <p class="has-text-primary">Profile:</p>
            <p>
                <a class="has-text-white-bis" target="_blank" rel="noreferrer" href="https://linkedin.com/in/ionut-alexandru-pacuraru-4390b8182">
                    https://linkedin.com/in/ionut-alexandru-pacuraru-4390b8182
                </a>
            </p>
        </div>
    </div>
    <div class="tile is-4 is-parent" in:fly={{y: 100, delay: 600, duration: 800, easing:quintOut}}>
        <div class="tile is-child box  glass-bg has-text-white-bis">
            <div>
                <img src="/icons/github-icon-blue.svg" alt="" width="96" height="96">
            </div>
            <p class="has-text-primary">Profile:</p>
            <p>
                <a class="has-text-white-bis break-word" target="_blank" rel="noreferrer" href="https://github.com/NastyInitiative/">
                    https://github.com/NastyInitiative/
                </a>
            </p>
        </div>
    </div>
    <div class="tile is-4 is-parent" in:fly={{y: 100, delay: 800, duration: 800, easing:quintOut}}>
        <div class="tile is-child box  glass-bg has-text-white-bis">
            <div>
                <img src="/icons/email-icon-blue.svg" alt="" width="96" height="96 ">
            </div>
            <p class="has-text-primary">Email:</p>
            <p class="has-text-white-bis">rokk91@live.com</p>
        </div>
    </div>
</div>